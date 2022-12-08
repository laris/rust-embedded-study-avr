<header>
    # Rust on an Arduino Uno, Part 4

    <time datetime="2016-05-12T13:04:43-04:00" pubdate="" data-updated="true">May 12<span>th</span>, 2016</time>
</header>

When we left off, we were [blinking the LED](http://jakegoulding.com/blog/2016/01/24/rust-on-an-arduino-uno-part-3/). Let’s take a
brief detour and document how to get a working Rust compiler. This is
mostly a way for me to document what I’ve been doing so I can find it
again!

<!-- more -->

We are going to start by getting a local version of LLVM that supports
targeting AVR. After cloning [the repository](https://github.com/avr-llvm/llvm), we will need
to set up for a build. Note that the upstream `avr-rust-support`
branch sometimes lags compared to `avr-support`, so you will probably
want to merge the two branches to get any updates.

<figure class="code">
    col 1                                       | col 2                                                                                                              
    ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------
    <pre class="line-numbers">
    1
    2
    3
    4
    5
    </pre> | ```
    cd avr-llvm
    git checkout avr-support
    git merge origin/avr-rust-support
    mkdir -p debug/build
    cd debug/build
    ```
</figure>

We will then configure LLVM. This _particular_ configuration I have
here is based off the current Rust build and is specific to OS X (see
the `C_FLAGS` and `CXX_FLAGS`). If you are using a different platform,
you’ll need to poke at the Rust build process to see the appropriate
flags.

Last updated: **2016-11-06**

<figure class="code">
    col 1                                                          | col 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    <pre class="line-numbers">
    12
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    </pre> | ```
    cmake ../.. \
      -DCMAKE_BUILD_TYPE=Debug \
      -DLLVM_TARGETS_TO_BUILD="X86;AVR" \
      -DLLVM_INCLUDE_EXAMPLES=OFF \
      -DLLVM_INCLUDE_TESTS=OFF \
      -DLLVM_INCLUDE_DOCS=OFF \
      -DLLVM_ENABLE_ZLIB=OFF \
      -DWITH_POLLY=OFF \
      -DLLVM_ENABLE_TERMINFO=OFF \
      -DLLVM_INSTALL_UTILS=ON \
      -DCMAKE_C_FLAGS="-ffunction-sections -fdata-sections -m64 -fPIC -stdlib=libc++" \
      -DCMAKE_CXX_FLAGS="-ffunction-sections -fdata-sections -m64 -fPIC -stdlib=libc++" \
      -DCMAKE_INSTALL_PREFIX=..
    ```
</figure>

Then it’s just a matter of building and installing. Since it created
normal `Makefile`s for me, I passed an extra make flag to build in
parallel. The LLVM build is pretty fast this way!

<figure class="code">
    col 1                                 | col 2                                                           
    ------------------------------------- | ----------------------------------------------------------------
    <pre class="line-numbers">
    1
    2
    </pre> | ```
    cmake --build . -- -j7
    cmake --build . --target install
    ```
</figure>

Then we need to build Rust with this custom LLVM. After cloning
[the repository](https://github.com/avr-rust/rust), set up the structure:

<figure class="code">
    col 1                                     | col 2                                                                 
    ----------------------------------------- | ----------------------------------------------------------------------
    <pre class="line-numbers">
    1
    2
    3
    4
    </pre> | ```
    cd avr-rust
    git checkout avr-support
    mkdir -p debug
    cd debug/
    ```
</figure>

AVR-LLVM is based on a very new version of LLVM, so we need to use the
in-progress Rust build system called “rustbuild”. Using in-development
build systems with in-development compilers, what could go wrong?

Note that it’s very important to use an absolute path to your LLVM
directory.

<figure class="code">
    col 1                                          | col 2                                                                                                                                                                                   
    ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    <pre class="line-numbers">
    12
    3
    4
    5
    6
    7
    </pre> | ```
    ../configure \
      --enable-rustbuild \
      --enable-debug \
      --disable-docs \
      --enable-debug-assertions \
      --disable-jemalloc \
      --llvm-root=/absolute/path/to/avr-llvm/debug
    ```
</figure>

Then we build!

<figure class="code">
    col 1                               | col 2            
    ----------------------------------- | -----------------
    <pre class="line-numbers">
    1
    </pre> | ```
    make -j7
    ```
</figure>

**4 or more hours later**, you will have a fully-built
compiler. However, you can usually get up-and-running earlier by using
the stage 1 compiler, located in `debug/build/*/stage1`. This will be
available pretty quickly, before the entire build is complete.

We then add this build as a [rustup](https://rustup.rs/) toolchain and use it as the
override compiler in a directory:

<figure class="code">
    col 1                                 | col 2                                                                                        
    ------------------------------------- | ---------------------------------------------------------------------------------------------
    <pre class="line-numbers">
    1
    2
    </pre> | ```
    rustup toolchain link avr /path/to/rust/debug/build/*/stage1
    rustup override set avr
    ```
</figure>

Note that this will only produce a cross-compiler; none of the
libraries that make things actually work. That’s still coming!

<footer>
    Posted by Jake Goulding
    <time datetime="2016-05-12T13:04:43-04:00" pubdate="" data-updated="true">May 12<span>th</span>, 2016</time>  
    [arduino](http://jakegoulding.com/blog/categories/arduino/), [rust](http://jakegoulding.com/blog/categories/rust/)
</footer>