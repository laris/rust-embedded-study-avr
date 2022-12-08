# nightly works nightly-2021-01-07
- ["LLVM ERROR: Not supported instr" on avr-unknown-gnu-atmega328 · Issue #400 · rust-lang/compiler-builtins](https://github.com/rust-lang/compiler-builtins/issues/400)
- [Upgrade to a recent rust compiler nightly by Rahix · Pull Request #268 · Rahix/avr-hal](https://github.com/Rahix/avr-hal/pull/268)
- [LLVM ERROR: Not supported instr · Issue #124 · Rahix/avr-hal](https://github.com/Rahix/avr-hal/issues/124)
- `rustup toolchain install nightly-2021-01-07` `cargo +nightly-2021-01-07 build`
  ```
  cat rust-toolchain.toml                                                                                                 (base)
  [toolchain]
  channel = "nightly"
  #channel = "nightly-2021-01-07"
  components = [ "rust-src" ]
  profile = "minimal"
  ```

# dot.gitignore.template
* `coding/rust-embedded/dot.gitignore.template`
  ```
  cat dot.gitignore.template
  .DS_Store
  .idea
  /target
  *.elf
  *.hex
  *.iml
  *.swp
  *.lock
  ```

##  --print target-list | column
* [Creating a custom target - The Embedonomicon](https://docs.rust-embedded.org/embedonomicon/custom-target.html)
* [A note on compiler support - The Embedonomicon](https://docs.rust-embedded.org/embedonomicon/compiler-support.html#built-in-target)
> rustc --print target-list | grep thumb | column
> rustc +nightly -Z unstable-options --print target-spec-json --target thumbv7m-none-eabi

```
> rustc --print target-list | grep avr
avr-unknown-gnu-atmega328
[22:27:51] laris@MBP-P5750 /Users/laris/coding/rust-embedded/try8
> rustc --print target-list | grep thumb
thumbv4t-none-eabi
thumbv6m-none-eabi
thumbv7a-pc-windows-msvc
thumbv7a-uwp-windows-msvc
thumbv7em-none-eabi
thumbv7em-none-eabihf
thumbv7m-none-eabi
thumbv7neon-linux-androideabi
thumbv7neon-unknown-linux-gnueabihf
thumbv7neon-unknown-linux-musleabihf
thumbv8m.base-none-eabi
thumbv8m.main-none-eabi
thumbv8m.main-none-eabihf
```
## rustup override set nightly
## target add
* rustup target add thumbv7m-none-eabi
```
rustup target list|grep thumb
thumbv6m-none-eabi
thumbv7em-none-eabi
thumbv7em-none-eabihf
thumbv7m-none-eabi (installed)
thumbv7neon-linux-androideabi
thumbv7neon-unknown-linux-gnueabihf
thumbv8m.base-none-eabi
thumbv8m.main-none-eabi
thumbv8m.main-none-eabihf
```
## About no_std
* [rfcs/1184-stabilize-no_std.md at master · rust-lang/rfcs](https://github.com/rust-lang/rfcs/blob/master/text/1184-stabilize-no_std.md)
* [no_std - The Embedded Rust Book](https://docs.rust-embedded.org/book/intro/no-std.html)
* [The smallest #![no_std] program - The Embedonomicon](https://docs.rust-embedded.org/embedonomicon/smallest-no-std.html#what-does-no_std-mean)
  * `error: language item required, but not found: eh_personality`
  * [[Solved] "Hello World" no_std build problem - help - The Rust Programming Language Forum](https://users.rust-lang.org/t/solved-hello-world-no-std-build-problem/23122/4)
  * [A Freestanding Rust Binary | Writing an OS in Rust](https://os.phil-opp.com/freestanding-rust-binary/#the-eh-personality-language-item)
  * [移除标准库依赖 · GitBook](https://rcore-os.github.io/rCore-Tutorial-deploy/docs/lab-0/guide/part-2.html)
  * [Rust写操作系统一 - 南寨小子](https://kangxiaoning.github.io/post/2021/04/writing-an-os-in-rust-01/)
  * [Writing an OS in Rust (2.Edition) # 1](https://blog.artwolf.in/a?ID=52cf821f-76ee-46e5-ab7b-ff91856d0b7e)
  * ['eh_personality' not found when building from another directory · Issue #67 · rust-embedded/cortex-m-quickstart](https://github.com/rust-embedded/cortex-m-quickstart/issues/67)
* [[Noob] What exactly is #![no_std], and why is it so useful sometimes to be without it? : rust](https://www.reddit.com/r/rust/comments/9eyc21/noob_what_exactly_is_no_std_and_why_is_it_so/)
* [rust - When adding `#![no_std]` to a library, are there any disadvantages or complications for the users of that library? - Stack Overflow](https://stackoverflow.com/questions/57611219/when-adding-no-std-to-a-library-are-there-any-disadvantages-or-complicati)
* [A no_std Rust binary](https://fasterthanli.me/series/making-our-own-executable-packer/part-12)

### eh_personality
```
> cargo build
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
error: language item required, but not found: `eh_personality`
error: could not compile `try8` due to previous error
```

## link with cc failed, ld entry point _main undfined for arch x86_64
```
> cargo build
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/try8/target/debug/deps/try8-1487152de4163b77.sb1p5zp0wd608gp.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/try8/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/try8/target/debug/deps/try8-1487152de4163b77" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: ld: entry point (_main) undefined. for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: could not compile `try8` due to previous error
```

### E0463 can't find crate for core, compiler_builtins 
* rustup target add thumbv7m-none-eabi
> rustup target add thumbv7m-none-eabi
> info: downloading component 'rust-std' for 'thumbv7m-none-eabi'
> info: installing component 'rust-std' for 'thumbv7m-none-eabi'

```
> cargo build --target thumbv7m-none-eabi
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
error[E0463]: can't find crate for `core`
  |
  = note: the `thumbv7m-none-eabi` target may not be installed
  = help: consider downloading the target with `rustup target add thumbv7m-none-eabi`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`

error[E0463]: can't find crate for `compiler_builtins`

error[E0463]: can't find crate for `core`
 --> src/main.rs:5:24
  |
5 | fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
  |                        ^^^^ can't find crate
  |
  = note: the `thumbv7m-none-eabi` target may not be installed
  = help: consider downloading the target with `rustup target add thumbv7m-none-eabi`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`

error: requires `sized` lang_item

For more information about this error, try `rustc --explain E0463`.
error: could not compile `try8` due to 4 previous errors
```
### can compile now, cargo build --target thumbv7m-none-eabi
```
> cargo build --target thumbv7m-none-eabi
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
    Finished dev [unoptimized + debuginfo] target(s) in 0.26s
```

### source code
```
#![no_main]
#![no_std]

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
```

## vscode
* [`Rust-analyzer` gets upset when you use `#![no_std]` · Issue #1022 · phil-opp/blog_os](https://github.com/phil-opp/blog_os/issues/1022)
* [Support for VSCode · Issue #812 · phil-opp/blog_os](https://github.com/phil-opp/blog_os/issues/812)


## Writing an OS in Rust Philipp Oppermann's blog
* [Writing an OS in Rust](https://os.phil-opp.com/)
* [phil-opp/blog_os: Writing an OS in Rust](https://github.com/phil-opp/blog_os)
* [A Freestanding Rust Binary](https://os.phil-opp.com/freestanding-rust-binary/)


## rustc cmdline failed
`rustc +nightly --target avr-atmega328p.json -C panic=abort try9-rustc-cmd-version.rs`
* [How to add external packages and run in rust compiler? - Stack Overflow](https://stackoverflow.com/questions/59915954/how-to-add-external-packages-and-run-in-rust-compiler)
* [bygge - Build a Rust project without Cargo* : rust](https://www.reddit.com/r/rust/comments/hc07zm/bygge_build_a_rust_project_without_cargo/)
* [Build your project](https://fnordig.de/2020/06/19/build-your-project/)

## freestanding-rust-binany for avr
```
> cargo build --target avr-atmega328p.json
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
warning: target json file contains unused fields: no-compiler-rt

error[E0463]: can't find crate for `core`
  |
  = note: the `avr-atmega328p-12967573754674464915` target may not be installed
  = help: consider downloading the target with `rustup target add avr-atmega328p-12967573754674464915`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`

error[E0463]: can't find crate for `compiler_builtins`

error[E0463]: can't find crate for `core`
 --> src/main.rs:5:24
  |
5 | fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
  |                        ^^^^ can't find crate
  |
  = note: the `avr-atmega328p-12967573754674464915` target may not be installed
  = help: consider downloading the target with `rustup target add avr-atmega328p-12967573754674464915`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`

error: requires `sized` lang_item

For more information about this error, try `rustc --explain E0463`.
warning: `try8` (bin "try8") generated 1 warning
error: could not compile `try8` due to 4 previous errors; 1 warning emitted
[08:50:29] laris@MBP-P5750 /Users/laris/coding/rust-embedded/try8 [101]

> cargo build --target avr-atmega328p.json -Zbuild-std=core
  Downloaded object v0.26.2 (registry `tuna`)
  Downloaded addr2line v0.16.0 (registry `tuna`)
  Downloaded gimli v0.25.0 (registry `tuna`)
  Downloaded 3 crates (976.7 KB) in 1.45s
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.55
warning: target json file contains unused fields: no-compiler-rt
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
error: ran out of registers during register allocation

warning: `rustc-std-workspace-core` (lib) generated 1 warning (1 duplicate)
warning: `core` (lib) generated 1 warning
error: could not compile `core` due to previous error; 1 warning emitted
warning: build failed, waiting for other jobs to finish...
warning: `compiler_builtins` (lib) generated 1 warning (1 duplicate)
error: build failed
```

### refine edition and version
```
> cargo +nightly-2021-01-07 build --target avr-atmega328p.json -Zbuild-std=core
   Compiling compiler_builtins v0.1.36
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling try8 v0.1.0 (/Users/laris/coding/rust-embedded/try8)
error: linking with `avr-gcc` failed: exit code: 1
  |
  = note: "avr-gcc" "-Os" "-mmcu=atmega328p" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-atmega328p/lib" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps/try8-cbe47a4a338dc2ae.4xa4et4doof049px.rcgu.o" "-o" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps/try8-cbe47a4a338dc2ae.elf" "-Wl,--gc-sections" "-no-pie" "-nodefaultlibs" "-L" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps" "-L" "/Users/laris/coding/rust-embedded/try8/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-atmega328p/lib" "-Wl,-Bstatic" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps/librustc_std_workspace_core-7261613fb760d4c5.rlib" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps/libcore-f4e0795176cea479.rlib" "/Users/laris/coding/rust-embedded/try8/target/avr-atmega328p/debug/deps/libcompiler_builtins-b2fe8ca4e550e44e.rlib" "-Wl,-Bdynamic" "-lc" "-lgcc"
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328p.o:(.init9+0x0): undefined reference to `main'
          collect2: error: ld returned 1 exit status


error: aborting due to previous error

error: could not compile `try8`

To learn more, run the command again with --verbose.
[08:55:46] laris@MBP-P5750 /Users/laris/coding/rust-embedded/try8 [101]
> grep edition Cargo.toml
edition = "2018"
[08:56:02] laris@MBP-P5750 /Users/laris/coding/rust-embedded/try8
```


# Rust OS Writing an OS in Rust
## Rust OS part 1, A Freestanding Rust Binary
* https://os.phil-opp.com/freestanding-rust-binary/
### cargo 1.57.0 2021-10-21 default set --bin and --edition 2021
```
> cargo new phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary
     Created binary (application) `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` package
```
```
> cargo -V
cargo 1.57.0 (b2e52d7ca 2021-10-21)

> rustc -V
rustc 1.57.0 (f1edd0429 2021-11-29)
[18:34:33] laris@MBP-P5750 /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary

> rustup override set nightly
info: using existing install for 'nightly-x86_64-apple-darwin'
info: override toolchain for '/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary' set to 'nightly-x86_64-apple-darwin'
  nightly-x86_64-apple-darwin unchanged - rustc 1.59.0-nightly (404c8471a 2021-12-14)
> rustup override list | grep (pwd)
/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary	nightly-x86_64-apple-darwin
info: you may remove overrides for non-existent directories with
`rustup override unset --nonexistent`

> rustup override unset
info: override toolchain for '/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary' removed
[18:42:45] laris@MBP-P5750 /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary
> rustup override list |grep (pwd)
info: you may remove overrides for non-existent directories with
`rustup override unset --nonexistent`

> rustc -V
rustc 1.59.0-nightly (404c8471a 2021-12-14)

> grep edition Cargo.toml
edition = "2021"

> cargo help new
       --bin
           Create a package with a binary target (src/main.rs). This is the default behavior.
       --edition edition
           Specify the Rust edition to use. Default is 2021. Possible values: 2015, 2018, 2021
```

```
#![no_std]

fn main() {
    println!("Hello, world!");
}
```

```
> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: cannot find macro `println` in this scope
 --> src/main.rs:4:5
  |
4 |     println!("Hello, world!");
  |     ^^^^^^^

error: language item required, but not found: `eh_personality`

error: `#[panic_handler]` function required, but not found

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to 3 previous errors
…5:47] laris@MBP-P5750 /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary [101]
>
```

### remove println
```
#![no_std]

fn main() {
//    println!("Hello, world!");
}
> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: language item required, but not found: `eh_personality`

error: `#[panic_handler]` function required, but not found

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to 2 previous errors
```

### add panic
```
#![no_std]

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }

fn main() { //    println!("Hello, world!"); }

> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: language item required, but not found: `eh_personality`

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

### eh_personality, disable unwinding
#### cargo command line args
* [rustc: Implement custom panic runtimes by alexcrichton · Pull Request #32900 · rust-lang/rust](https://github.com/rust-lang/rust/pull/32900)
```
> cargo rustc -- -C panic=abort
```

#### set panic="abort" in Cargo.toml
```
[profile.dev]
panic = "abort"

[profile.release]
panic = "abort"

```
```
> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: requires `start` lang_item

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

### cargo build debug/dev and release option
```
> cargo clean
[18:21:20] laris@MBP-P5750 /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary

> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: requires `start` lang_item

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
> ls target/
CACHEDIR.TAG debug

> cargo clean
[18:21:34] laris@MBP-P5750 /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary
> ls
Cargo.lock Cargo.toml src


> cargo build --release
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: requires `start` lang_item

error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
> ls target/
CACHEDIR.TAG release
```

### no_main and overwriting the entry point
```
#![no_std]
#![no_main]

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }

fn main() { //    println!("Hello, world!"); }


> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
warning: function is never used: `main`
 --> src/main.rs:4:4
  |
4 | fn main() {
  |    ^^^^
  |
  = note: `#[warn(dead_code)]` on by default

error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d.5jagknnhu22lj2l.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: ld: entry point (_main) undefined. for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


warning: `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` (bin "phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary") generated 1 warning
error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error; 1 warning emitted
```
* remove main()
```
#![no_std]
#![no_main]

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }

// fn main() { //    println!("Hello, world!"); }


> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d.5jagknnhu22lj2l.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: ld: entry point (_main) undefined. for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

#### overwrite the entry point with _start function
```
#![no_std]
#![no_main]

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }

// fn main() { //    println!("Hello, world!"); }

#[no_mangle]
pub extern "C" fn _start() -> ! { loop {} }

> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d.5jagknnhu22lj2l.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: ld: entry point (_main) undefined. for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

### after set nightly and cargo build, linker err
```
> cargo build
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-1d9b28eeffffe50b.to3ej3lvjve5q01.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-7454d006639b0b9c.rlib" "/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-07b1a016408f5808.rlib" "/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-b46cf5872e0a4b93.rlib" "-L" "/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-1d9b28eeffffe50b" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: Undefined symbols for architecture x86_64:
            "_main", referenced from:
                start in crt1.10.6.o
            "_exit", referenced from:
                start in crt1.10.6.o
          ld: symbol(s) not found for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

### nightly -e __start pass
```
> cargo rustc -- -C link-args="-e __start"
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 0.20s
```

### stable -e __start
```
> cargo rustc -- -C link-args="-e __start"
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d.5jagknnhu22lj2l.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d" "-Wl,-dead_strip" "-nodefaultlibs" "-e" "__start"
  = note: ld: dynamic main executables must link with libSystem.dylib for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

#### cargo rustc -- -C link-args="-e __start -static"
```
> cargo rustc -- -C link-args="-e __start -static"

   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d.5jagknnhu22lj2l.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps/phil_opp_write_an_os_in_rust_01_a_freestanding_rust_binary-c22c4a1ab35fd22d" "-Wl,-dead_strip" "-nodefaultlibs" "-e" "__start" "-static"
  = note: ld: library not found for -lcrt0.o
          clang: error: linker command failed with exit code 1 (use -v to see invocation)


error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

#### cargo rustc -- -C link-args="-e __start -static -nostartfiles"
```
> cargo rustc -- -C link-args="-e __start -static -nostartfiles"
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 0.16s
```

### unifying the build cmd
```
# in .cargo/config.toml

[target.'cfg(target_os = "linux")']
rustflags = ["-C", "link-arg=-nostartfiles"]

[target.'cfg(target_os = "windows")']
rustflags = ["-C", "link-args=/ENTRY:_start /SUBSYSTEM:console"]

[target.'cfg(target_os = "macos")']
rustflags = ["-C", "link-args=-e __start -static -nostartfiles"]
```

## Rust OS Part 2 [A Minimal Rust Kernel | Writing an OS in Rust](https://os.phil-opp.com/minimal-rust-kernel/)

```
> rustc --print target-list | grep x86 | column
x86_64-apple-darwin			x86_64-sun-solaris			x86_64-unknown-netbsd
x86_64-apple-ios			x86_64-unknown-dragonfly		x86_64-unknown-none-hermitkernel
x86_64-apple-ios-macabi			x86_64-unknown-freebsd			x86_64-unknown-none-linuxkernel
x86_64-apple-tvos			x86_64-unknown-haiku			x86_64-unknown-openbsd
x86_64-fortanix-unknown-sgx		x86_64-unknown-hermit			x86_64-unknown-redox
x86_64-fuchsia				x86_64-unknown-illumos			x86_64-unknown-uefi
x86_64-linux-android			x86_64-unknown-l4re-uclibc		x86_64-uwp-windows-gnu
x86_64-pc-solaris			x86_64-unknown-linux-gnu		x86_64-uwp-windows-msvc
x86_64-pc-windows-gnu			x86_64-unknown-linux-gnux32		x86_64-wrs-vxworks
x86_64-pc-windows-msvc			x86_64-unknown-linux-musl

> rustc --print target-spec-json --target x86_64-unknown-linux-gnu
error: the `-Z unstable-options` flag must also be passed to enable the target-spec-json print option

> rustc -Z unstable-options --print target-spec-json --target x86_64-unknown-linux-gnu
error: the option `Z` is only accepted on the nightly compiler

> rustc +nightly -Z unstable-options --print target-spec-json --target x86_64-unknown-linux-gnu
{
  "arch": "x86_64",
  "cpu": "x86-64",
  "crt-static-respected": true,
  "data-layout": "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128",
  "dynamic-linking": true,
  "env": "gnu",
  "executables": true,
  "has-elf-tls": true,
  "has-rpath": true,
  "is-builtin": true,
  "llvm-target": "x86_64-unknown-linux-gnu",
  "max-atomic-width": 64,
  "os": "linux",
  "position-independent-executables": true,
  "pre-link-args": {
    "gcc": [
      "-m64"
    ]
  },
  "relro-level": "full",
  "stack-probes": {
    "kind": "call"
  },
  "supported-sanitizers": [
    "address",
    "cfi",
    "leak",
    "memory",
    "thread"
  ],
  "target-family": [
    "unix"
  ],
  "target-pointer-width": "64"
}

> rustc +nightly -Z unstable-options --print target-spec-json --target x86_64-unknown-linux-gnu > rustc--print_target-spec-json--target_x86_64-unknown-linux-gnu.json
```

#### x86_64-unknown-none [Platform Support - The rustc book](https://doc.rust-lang.org/nightly/rustc/platform-support.html#tier-3)
* https://doc.rust-lang.org/nightly/rustc/platform-support/x86_64-unknown-none.html
```
> rustc +nightly -Z unstable-options --print target-spec-json --target x86_64-unknown-none
{
  "arch": "x86_64",
  "code-model": "kernel",
  "cpu": "x86-64",
  "data-layout": "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128",
  "disable-redzone": true,
  "executables": true,
  "features": "-mmx,-sse,-sse2,-sse3,-ssse3,-sse4.1,-sse4.2,-3dnow,-3dnowa,-avx,-avx2,+soft-float",
  "is-builtin": true,
  "linker": "rust-lld",
  "linker-flavor": "ld.lld",
  "llvm-target": "x86_64-unknown-none-elf",
  "max-atomic-width": 64,
  "panic-strategy": "abort",
  "position-independent-executables": true,
  "relro-level": "full",
  "stack-probes": {
    "kind": "call"
  },
  "static-position-independent-executables": true,
  "target-pointer-width": "64"
}
> rustc +nightly -Z unstable-options --print target-spec-json --target x86_64-unknown-none >> ../rustc--print_target-spec-json--target_x86_64-unknown-none.json

```
#### x86_64-blog_os.json
```
{
  "llvm-target": "x86_64-unknown-none",
  "data-layout": "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128",
  "arch": "x86_64",
  "target-endian": "little",
  "target-pointer-width": "64",
  "target-c-int-width": "32",
  "os": "none",
  "executables": true,
  "linker": "rust-lld",
  "linker-flavor": "ld.lld",
  "panic-strategy": "abort",
  "disable-redzone": true,
  "features": "-mmx,-sse,-sse2,-sse3,-ssse3,-sse4.1,-sse4.2,-3dnow,-3dnowa,-avx,-avx2,+soft-float"
}
```

```
> cargo build --target x86_64-blog_os.json
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
error[E0463]: can't find crate for `core`
  |
  = note: the `x86_64-blog_os-4351561409439981873` target may not be installed
  = help: consider downloading the target with `rustup target add x86_64-blog_os-4351561409439981873`

For more information about this error, try `rustc --explain E0463`.
error: could not compile `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` due to previous error
```

### crate core missing issue
* build-std [Unstable Features - The Cargo Book](https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#build-std)

#### cmdline cargo +nightly build -Zbuild-std=core --target
```
> cargo +nightly build -Zbuild-std=core --target x86_64-blog_os.json -v
       Fresh core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
       Fresh rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
       Fresh compiler_builtins v0.1.55
       Fresh phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 0.03s
```

#### .cargo/config.toml with unstable build-std
```
# in .cargo/config.toml

[unstable]
build-std = ["core", "compiler_builtins"]

> cargo +nightly build --target x86_64-blog_os.json
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.55
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 13.42s
```

### compiler-builtins-mem
* [library: Forward compiler-builtins "mem" feature by josephlr · Pull Request #77284 · rust-lang/rust](https://github.com/rust-lang/rust/pull/77284)
#### cmdline
```
> cargo +nightly build -Zbuild-std=core -Zbuild-std-features=compiler-builtins-mem --target x86_64-blog_os.json
   Compiling compiler_builtins v0.1.55
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 13.32s
```

#### .cargo/config.toml
```
# append into .cargo/config.toml
[unstable]
build-std-features = ["compiler-builtins-mem"]
build-std = ["core", "compiler_builtins"]

> cargo +nightly build --target x86_64-blog_os.json
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.55
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary v0.1.0 (/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary)
    Finished dev [unoptimized + debuginfo] target(s) in 13.38s
```

* verbose show feature mem
* `--cfg 'feature="mem"'`
```
     Running `rustc --crate-name compiler_builtins /usr/local/rust/cargo/registry/src/mirrors.tuna.tsinghua.edu.cn-df7c3c540f42cdbd/compiler_builtins-0.1.55/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,future-incompat --crate-type lib --emit=dep-info,metadata,link -C panic=abort -C embed-bitcode=no -C debuginfo=2 --cfg 'feature="compiler-builtins"' --cfg 'feature="core"' --cfg 'feature="default"' --cfg 'feature="mem"' --cfg 'feature="rustc-dep-of-std"' -C metadata=604aace4041d830d -C extra-filename=-604aace4041d830d --out-dir /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/x86_64-blog_os/debug/deps --target /Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/x86_64-blog_os.json -Z force-unstable-if-unmarked -L dependency=/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/x86_64-blog_os/debug/deps -L dependency=/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/debug/deps --extern core=/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/x86_64-blog_os/debug/deps/librustc_std_workspace_core-ee9da32cf4516b8d.rmeta --cap-lints allow --cfg 'feature="unstable"' --cfg 'feature="mem-unaligned"'`
```

### set default target in .cargo/config.toml
```
# append into .cargo/config.toml
[build]
target = "x86_64-blog_os.json"
```

### Print to VGA screen
```
static HELLO: &[u8] = b"Hello World!";

#[no_mangle]
pub extern "C" fn _start() -> ! {
  let vga_buffer = 0xb8000 as *mut u8;
  for (i, &byte) in HELLO.iter().enumerate() {
    unsafe {
      *vga_buffer.offset(i as isize * 2) = byte;
      *vga_buffer.offset(i as isize * 2 + 1) = 0xb;
    }
  }
  loop {}
}
```

### create bootimage
```
# add into Cargo.toml
[dependencies]
bootloader = "^0.9.8"

cargo install bootimage

```
#### cargo bootloader with llvm-tools not found
```
error: failed to run custom build command for `bootloader v0.9.19 (/usr/local/rust/cargo/registry/src/mirrors.tuna.tsinghua.edu.cn-df7c3c540f42cdbd/bootloader-0.9.19)`

Caused by:
  process didn't exit successfully: `/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/bootimage/bootloader/release/build/bootloader-596689f3e74cbb94/build-script-build` (exit status: 1)
  --- stderr
  Error: llvm-tools not found
  Maybe the rustup component `llvm-tools-preview` is missing?
    Install it through: `rustup component add llvm-tools-preview`
warning: build failed, waiting for other jobs to finish...
error: build failed
Error: Bootloader build failed.
Stderr:

> rustup component add llvm-tools-preview
info: downloading component 'llvm-tools-preview'
info: installing component 'llvm-tools-preview'
 45.7 MiB /  45.7 MiB (100 %)  14.3 MiB/s in  3s ETA:  0s


 > cargo bootimage
WARNING: `CARGO_MANIFEST_DIR` env variable not set
Building kernel
    Finished dev [unoptimized + debuginfo] target(s) in 0.03s
Building bootloader
   Compiling compiler_builtins v0.1.55
   Compiling bootloader v0.9.19 (/usr/local/rust/cargo/registry/src/mirrors.tuna.tsinghua.edu.cn-df7c3c540f42cdbd/bootloader-0.9.19)
   Compiling bitflags v1.2.1
   Compiling bit_field v0.9.0
   Compiling zero v0.1.2
   Compiling fixedvec v0.2.4
   Compiling usize_conversions v0.2.0
   Compiling rlibc v1.0.0
   Compiling xmas-elf v0.6.2
   Compiling x86_64 v0.13.2
warning: use of deprecated macro `llvm_asm`: will be removed from the compiler, use asm! instead
  --> src/main.rs:45:5
   |
45 |     llvm_asm!("call $1; ${:private}.spin.${:uid}: jmp ${:private}.spin.${:uid}" ::
   |     ^^^^^^^^
   |
   = note: `#[warn(deprecated)]` on by default

warning: use of deprecated macro `llvm_asm`: will be removed from the compiler, use asm! instead
  --> src/main.rs:91:5
   |
91 |     llvm_asm!("mov bx, 0x0
   |     ^^^^^^^^

warning: `bootloader` (bin "bootloader") generated 2 warnings
    Finished release [optimized + debuginfo] target(s) in 3.11s
Created bootimage for `phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary` at `/Users/laris/coding/rust-embedded/phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary/target/x86_64-blog_os/debug/bootimage-phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary.bin`
```

```
-rwxr-xr-x  1 laris  staff    66K Dec 15 22:49 target/x86_64-blog_os/debug/bootimage-binary.bin
> file *.bin
 DOS/MBR boot sector
```


#### release version
```
> cargo bootimage --release -v
60K
```

### qemu
`> qemu-system-x86_64 -drive format=raw,file=target/x86_64-blog_os/debug/bootimage-phil-opp_write-an-os-in-rust_01_a-freestanding-rust-binary.bin`

### cargo run with qemu
```
# in .cargo/config.toml

[target.'cfg(target_os = "none")']
runner = "bootimage runner"
```



# AVR emulator
* [stainlessio/AVRust: An AVR emulator written in Rust](https://github.com/stainlessio/AVRust)
* [mlafroce/avr-avogadro: AVR Atmel simulator in Rust and C++](https://github.com/mlafroce/avr-avogadro)
* [MackieLoeffel/avr-vm: VM with JIT-compiler for ATMega32 written in Rust](https://github.com/mackieloeffel/avr-vm)
* [dylanmckay/avr: An AVR emulator](https://github.com/dylanmckay/avr)
* [Cowgod's Chip-8 Technical Reference](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM)
* [CHIP-8 emulator in Rust. Part 1 · Dhole's blog](https://dhole.github.io/post/chip8_emu_1/)
* [Dhole/chip8-rs: Rust `no_std` implementation of the chip8 virtual machine.](https://github.com/Dhole/chip8-rs)
* [Nov 16 2017 20:56](https://gitter.im/avr-rust/Lobby?at=5a0d8aeeba39a53f1aa8dcde)
* [Nov 16 2017 21:23](https://gitter.im/avr-rust/Lobby?at=5a0d9145e606d60e34cfc6f7)
* [AVRS: Emulating AVR Microcontrollers for Reverse Engineering and Security Testing](http://eprints.cs.univie.ac.at/7092/1/3407023.3407065.pdf)


# AVR

## check toolchains and override for pwd
```
> rustup override list | grep (pwd)
info: you may remove overrides for non-existent directories with
`rustup override unset --nonexistent`

> cargo -vV
cargo 1.57.0 (b2e52d7ca 2021-10-21)
release: 1.57.0
commit-hash: b2e52d7cab0a286ee9fcc0c17510b1e72fcb53eb
commit-date: 2021-10-21
host: x86_64-apple-darwin
libgit2: 1.3.0 (sys:0.13.23 vendored)
libcurl: 7.64.1 (sys:0.4.49+curl-7.79.1 system ssl:(SecureTransport) LibreSSL/2.8.3)
os: Mac OS 11.6.0 [64-bit]
[08:57:40] laris@MBP-P5750 /Users/laris/coding/rust-embedded

> rustc -vV
rustc 1.57.0 (f1edd0429 2021-11-29)
binary: rustc
commit-hash: f1edd0429582dd29cccacaf50fd134b05593bd9c
commit-date: 2021-11-29
host: x86_64-apple-darwin
release: 1.57.0
LLVM version: 13.0.0

> rustup override set nightly
> rustup override unset
```

## cargo new avr-scratch-00

```
> cargo new avr-scratch-00
     Created binary (application) `avr-scratch-00` package
> cd avr-scratch-00
> grep edition Cargo.toml
edition = "2021"
> cat main.rs
fn main() {
    println!("Hello, world!");
}
```

## no_std, panic_handler, eh_personality
```
#![no_std]

fn main() {
    println!("Hello, world!");
}

add no_std
result: println + eh + panic_handler

> cargo build
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: cannot find macro `println` in this scope
 --> src/main.rs:4:5
  |
4 |     println!("Hello, world!");
  |     ^^^^^^^
error: language item required, but not found: `eh_personality`
error: `#[panic_handler]` function required, but not found
error: could not compile `avr-scratch-00` due to 3 previous errors

add panic_handler
result: eh + panic_handler

> cargo build
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: cannot find macro `println` in this scope
 --> src/main.rs:7:5
  |
7 |     println!("Hello, world!");
  |     ^^^^^^^
error: language item required, but not found: `eh_personality`
error: could not compile `avr-scratch-00` due to 2 previous errors

remove println
result: eh

> cargo build
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: language item required, but not found: `eh_personality`
error: could not compile `avr-scratch-00` due to previous error

panic=abort
result: start

#![no_std]
#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
fn main() { }

> cargo rustc -- -C panic=abort
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: requires `start` lang_item

error: could not compile `avr-scratch-00` due to previous error

remove the entry point with no_main
result: _main

#![no_std]
#![no_main]
#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }

> cargo rustc -- -Cpanic=abort
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae.1i9hl4jryv8hra1u.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae" "-Wl,-dead_strip" "-nodefaultlibs"
  = note: ld: entry point (_main) undefined. for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: could not compile `avr-scratch-00` due to previous error


```
### avr entry point
* [Creating an executable entry point with #[no_main] - The AVR-Rust Guidebook](https://book.avr-rust.com/005.3-creating-an-executable-entry-point.html)
```
add entry point _start

#![no_std]
#![no_main]
#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
#[no_mangle]
pub extern "C" fn _start() -> ! { loop {} }

> cargo rustc -- -Cpanic=abort -Clink-args="-e __start"
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae.1i9hl4jryv8hra1u.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae" "-Wl,-dead_strip" "-nodefaultlibs" "-e" "__start"
  = note: ld: dynamic main executables must link with libSystem.dylib for architecture x86_64
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: could not compile `avr-scratch-00` due to previous error

> cargo rustc -- -Cpanic=abort -Clink-args="-e __start --static"
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae.1i9hl4jryv8hra1u.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae" "-Wl,-dead_strip" "-nodefaultlibs" "-e" "__start" "--static"
  = note: ld: unknown option: --static
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: could not compile `avr-scratch-00` due to previous error

> cargo rustc -- -Cpanic=abort -Clink-args="-e __start -static"
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `cc` failed: exit status: 1
  |
  = note: "cc" "-m64" "-arch" "x86_64" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae.1i9hl4jryv8hra1u.rcgu.o" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/librustc_std_workspace_core-1108e622f5a15c3d.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcore-43af7053e70b1eed.rlib" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib/libcompiler_builtins-3a81ebf6a3abbdee.rlib" "-L" "/usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_64-apple-darwin/lib" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps/avr_scratch_00-45d244c4054ac5ae" "-Wl,-dead_strip" "-nodefaultlibs" "-e" "__start" "-static"
  = note: ld: library not found for -lcrt0.o
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
error: could not compile `avr-scratch-00` due to previous error

> cargo rustc -- -Cpanic=abort -Clink-args="-e __start -static -nostartfiles"
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 0.28s
```

## --target thumbv7
```
> cargo +nightly rustc -- -Cpanic=abort --target thumbv7em-none-eabihf
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: `-Csplit-debuginfo` is unstable on this platform
error: could not compile `avr-scratch-00` due to previous error

> cargo +nightly rustc -- -Cpanic=abort -Z unstable-options --target thumbv7em-none-eabihf
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 0.14s
```

## --target avr and print avr target-spec-json
```
> rustup target add avr-unknown-gnu-atmega328
error: toolchain 'stable-x86_64-apple-darwin' does not contain component 'rust-std' for target 'avr-unknown-gnu-atmega328'
note: not all platforms have the standard library pre-compiled: https://doc.rust-lang.org/nightly/rustc/platform-support.html
```

```
> rustc +nightly -Zunstable-options --print target-spec-json --target avr-unknown-gnu-atmega328
{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": true,
  "late-link-args": {
    "gcc": [
      "-lgcc"
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16"
}
```

### cmdline with json
```
> cargo +nightly rustc -- -Cpanic=abort -Z unstable-options --target avr-unknown-gnu-atmega328.json -v
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: Error loading target specification: may not set is_builtin for targets not built-in. Run `rustc --print target-list` for a list of built-in targets
error: could not compile `avr-scratch-00` due to previous error


change is-builtin to false


> cargo +nightly rustc -- -Cpanic=abort -Z unstable-options --target avr-unknown-gnu-atmega328.json -v
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error[E0463]: can't find crate for `core`
  |
  = note: the `avr-unknown-gnu-atmega328-5057658835213699139` target may not be installed
  = help: consider downloading the target with `rustup target add avr-unknown-gnu-atmega328-5057658835213699139`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`
error[E0463]: can't find crate for `compiler_builtins`
error[E0463]: can't find crate for `core`
 --> src/main.rs:5:24
  |
5 | fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
  |                        ^^^^ can't find crate
  = note: the `avr-unknown-gnu-atmega328-5057658835213699139` target may not be installed
  = help: consider downloading the target with `rustup target add avr-unknown-gnu-atmega328-5057658835213699139`
  = help: consider building the standard library from source with `cargo build -Zbuild-std`
error: requires `sized` lang_item
For more information about this error, try `rustc --explain E0463`.
error: could not compile `avr-scratch-00` due to 4 previous errors

```
### cargo +nightly rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -v
```
> cargo +nightly rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -v
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
     Running `rustc --crate-name core --edition=2018 /usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata,link -C embed-bitcode=no -C debuginfo=2 -C metadata=dff502975339bccf -C extra-filename=-dff502975339bccf --out-dir /Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps --target /Users/laris/coding/rust-embedded/avr-scratch-00/avr-unknown-gnu-atmega328.json -Z force-unstable-if-unmarked -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps --cap-lints allow`
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
     Running `rustc --crate-name rustc_std_workspace_core --edition=2018 /usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata,link -C embed-bitcode=no -C debuginfo=2 -C metadata=c64b75197be55560 -C extra-filename=-c64b75197be55560 --out-dir /Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps --target /Users/laris/coding/rust-embedded/avr-scratch-00/avr-unknown-gnu-atmega328.json -Z force-unstable-if-unmarked -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps --extern core=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcore-dff502975339bccf.rmeta --cap-lints allow`
error: ran out of registers during register allocation

   Compiling compiler_builtins v0.1.55
     Running `rustc --crate-name compiler_builtins /usr/local/rust/cargo/registry/src/mirrors.tuna.tsinghua.edu.cn-df7c3c540f42cdbd/compiler_builtins-0.1.55/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,future-incompat --crate-type lib --emit=dep-info,metadata,link -C embed-bitcode=no -C debuginfo=2 --cfg 'feature="compiler-builtins"' --cfg 'feature="core"' --cfg 'feature="default"' --cfg 'feature="rustc-dep-of-std"' -C metadata=52b02bc03baa55f6 -C extra-filename=-52b02bc03baa55f6 --out-dir /Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps --target /Users/laris/coding/rust-embedded/avr-scratch-00/avr-unknown-gnu-atmega328.json -Z force-unstable-if-unmarked -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps --extern core=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/librustc_std_workspace_core-c64b75197be55560.rmeta --cap-lints allow --cfg 'feature="unstable"'`
error: could not compile `core` due to previous error

Caused by:
  process didn't exit successfully: `rustc --crate-name core --edition=2018 /usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata,link -C embed-bitcode=no -C debuginfo=2 -C metadata=dff502975339bccf -C extra-filename=-dff502975339bccf --out-dir /Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps --target /Users/laris/coding/rust-embedded/avr-scratch-00/avr-unknown-gnu-atmega328.json -Z force-unstable-if-unmarked -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps -L dependency=/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps --cap-lints allow` (exit status: 1)
warning: build failed, waiting for other jobs to finish...
error: build failed
```

### cmdline cargo +nightly rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort
* [cargo rustc - The Cargo Book](https://doc.rust-lang.org/cargo/commands/cargo-rustc.html)
```
> cargo +nightly rustc -Z build-std=core -Z unstable-options -Z build-std-features=compiler-builtins-mem --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.55
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
error: ran out of registers during register allocation

error: could not compile `core` due to previous error
warning: build failed, waiting for other jobs to finish...
error: build failed
```

### err ran out of registers during register allocation
* [LLVM ERROR: Not supported instr · Issue #124 · Rahix/avr-hal](https://github.com/Rahix/avr-hal/issues/124)

### revert to 2018 edition and cargo +nightly-2021-01-07
```
#![no_std]
#![no_main]
#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
pub extern "C" fn _start() -> ! { loop {} }

> cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `avr-gcc` failed: exit code: 1
  = note: "avr-gcc" "-mmcu=atmega328" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-bc4d4de9a4c94445.4k27cb97l9q3r41u.rcgu.o" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-bc4d4de9a4c94445.elf" "-Wl,--gc-sections" "-nodefaultlibs" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "-Wl,-Bstatic" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/librustc_std_workspace_core-a47b76e28edd1597.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcore-ac9d14e1f88513f6.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcompiler_builtins-e072b79648a2ea91.rlib" "-Wl,-Bdynamic" "-lgcc"
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x0): undefined reference to `main'
          collect2: error: ld returned 1 exit status
error: aborting due to previous error
error: could not compile `avr-scratch-00`
To learn more, run the command again with --verbose.

#![no_std]
#![no_main]
#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
//pub extern "C" fn _start() -> ! { loop {} }
pub extern fn main() { }

> cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 0.54s
```
### json
```
> diff avr-unknown-gnu-atmega328.json ../target-spec-json_avr-unknown-gnu-atmega328.json
9c9
<   "is-builtin": false,
---
>   "is-builtin": true,


{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
      "-lgcc"
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16"
}

```
### dis-assemble elf, __vectors, __ctors, __do: _copy_data + _clear_bss, main, _exit, stop_program
```
> avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <__vectors>:
   0:	0c 94 34 00 	jmp	0x68	; 0x68 <__ctors_end>
   4:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
   8:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
   c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  10:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  14:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  18:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  1c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  20:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  24:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  28:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  2c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  30:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  34:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  38:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  3c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  40:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  44:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  48:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  4c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  50:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  54:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  58:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  5c:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  60:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>
  64:	0c 94 51 00 	jmp	0xa2	; 0xa2 <__bad_interrupt>

00000068 <__ctors_end>:
  68:	11 24       	eor	r1, r1
  6a:	1f be       	out	0x3f, r1	; 63
  6c:	cf ef       	ldi	r28, 0xFF	; 255
  6e:	d8 e0       	ldi	r29, 0x08	; 8
  70:	de bf       	out	0x3e, r29	; 62
  72:	cd bf       	out	0x3d, r28	; 61

00000074 <__do_copy_data>:
  74:	11 e0       	ldi	r17, 0x01	; 1
  76:	a0 e0       	ldi	r26, 0x00	; 0
  78:	b1 e0       	ldi	r27, 0x01	; 1
  7a:	ec ea       	ldi	r30, 0xAC	; 172
  7c:	f0 e0       	ldi	r31, 0x00	; 0
  7e:	02 c0       	rjmp	.+4      	; 0x84 <__do_copy_data+0x10>
  80:	05 90       	lpm	r0, Z+
  82:	0d 92       	st	X+, r0
  84:	a0 30       	cpi	r26, 0x00	; 0
  86:	b1 07       	cpc	r27, r17
  88:	d9 f7       	brne	.-10     	; 0x80 <__do_copy_data+0xc>

0000008a <__do_clear_bss>:
  8a:	21 e0       	ldi	r18, 0x01	; 1
  8c:	a0 e0       	ldi	r26, 0x00	; 0
  8e:	b1 e0       	ldi	r27, 0x01	; 1
  90:	01 c0       	rjmp	.+2      	; 0x94 <.do_clear_bss_start>

00000092 <.do_clear_bss_loop>:
  92:	1d 92       	st	X+, r1

00000094 <.do_clear_bss_start>:
  94:	a0 30       	cpi	r26, 0x00	; 0
  96:	b2 07       	cpc	r27, r18
  98:	e1 f7       	brne	.-8      	; 0x92 <.do_clear_bss_loop>
  9a:	0e 94 53 00 	call	0xa6	; 0xa6 <main>
  9e:	0c 94 54 00 	jmp	0xa8	; 0xa8 <_exit>

000000a2 <__bad_interrupt>:
  a2:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>

000000a6 <main>:
  a6:	08 95       	ret

000000a8 <_exit>:
  a8:	f8 94       	cli

000000aa <__stop_program>:
  aa:	ff cf       	rjmp	.-2      	; 0xaa <__stop_program>
```
### avr-objdump -dhsr
```
> avr-objdump -dhsr target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Sections:
Idx Name          Size      VMA       LMA       File off  Algn
  0 .data         00000000  00800100  00800100  00000100  2**0
                  CONTENTS, ALLOC, LOAD, DATA
  1 .text         000000ac  00000000  00000000  00000054  2**1
                  CONTENTS, ALLOC, LOAD, READONLY, CODE
  2 .note.gnu.avr.deviceinfo 0000003c  00000000  00000000  00000100  2**2
                  CONTENTS, READONLY, OCTETS
  3 .debug_aranges 00000078  00000000  00000000  00000140  2**3
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  4 .debug_pubnames 000000ae  00000000  00000000  000001b8  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  5 .debug_info   00000b91  00000000  00000000  00000266  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  6 .debug_abbrev 000006ee  00000000  00000000  00000df7  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  7 .debug_line   00000217  00000000  00000000  000014e5  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  8 .debug_str    00000696  00000000  00000000  000016fc  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  9 .debug_pubtypes 00000308  00000000  00000000  00001d92  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
 10 .debug_ranges 0000000c  00000000  00000000  0000209a  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
Contents of section .text:
```


### remove startfiles "-nostartfiles"
```
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328",
      "-nostartfiles"
    ]
  },

{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
      "-lgcc"
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328",
      "-nostartfiles"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16"
}

```

#### "-nostartfiles" __do: _copy_data + _clear_bss
```
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <__do_copy_data>:
   0:	11 e0       	ldi	r17, 0x01	; 1
   2:	a0 e0       	ldi	r26, 0x00	; 0
   4:	b1 e0       	ldi	r27, 0x01	; 1
   6:	e6 e2       	ldi	r30, 0x26	; 38
   8:	f0 e0       	ldi	r31, 0x00	; 0
   a:	02 c0       	rjmp	.+4      	; 0x10 <__do_copy_data+0x10>
   c:	05 90       	lpm	r0, Z+
   e:	0d 92       	st	X+, r0
  10:	a0 30       	cpi	r26, 0x00	; 0
  12:	b1 07       	cpc	r27, r17
  14:	d9 f7       	brne	.-10     	; 0xc <__do_copy_data+0xc>

00000016 <__do_clear_bss>:
  16:	21 e0       	ldi	r18, 0x01	; 1
  18:	a0 e0       	ldi	r26, 0x00	; 0
  1a:	b1 e0       	ldi	r27, 0x01	; 1
  1c:	01 c0       	rjmp	.+2      	; 0x20 <.do_clear_bss_start>

0000001e <.do_clear_bss_loop>:
  1e:	1d 92       	st	X+, r1

00000020 <.do_clear_bss_start>:
  20:	a0 30       	cpi	r26, 0x00	; 0
  22:	b2 07       	cpc	r27, r18
  24:	e1 f7       	brne	.-8      	; 0x1e <.do_clear_bss_loop>
```

#### remove  late-link-args "-lgcc" will no code
```
  "late-link-args": {
    "gcc": [
      "-lgcc"
    ]
  },


{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328",
      "-nostartfiles"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16"
}
```

### add main entry point  -Clink-args="-e main"
```
> cargo clean; cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort -Clink-args="-e main" -v ; avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 9.44s

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <main>:
   0:	0e 94 04 00 	call	0x8	; 0x8 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>
   4:	00 c0       	rjmp	.+0      	; 0x6 <main+0x6>
   6:	08 95       	ret

00000008 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>:
   8:	00 00       	nop
   a:	08 95       	ret
```

### not sure where source for gcc lgcc for late-link-args, remove it
* [⚙ D54334 [AVR] Automatically link CRT and libgcc from the system avr-gcc](https://reviews.llvm.org/D54334)
### confirm nostartfiles can pass via rustc, static is not useful for avr
```

{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16"
}


> cargo clean; cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort -Clink-args="-e main -nostartfiles -static" -v ; avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 10.09s

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr


Disassembly of section .text:

00000000 <main>:
   0:	0e 94 04 00 	call	0x8	; 0x8 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>
   4:	00 c0       	rjmp	.+0      	; 0x6 <main+0x6>
   6:	08 95       	ret

00000008 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>:
   8:	00 00       	nop
   a:	08 95       	ret
```

### interrupt, looks no code
* [Unified interrupt handler interface · Issue #12 · avr-rust/ruduino](https://github.com/avr-rust/ruduino/issues/12)
* [Rust compiler support for interrupts - Stack Overflow](https://stackoverflow.com/questions/43389196/rust-compiler-support-for-interrupts)
* [Interrupt handler symbol name incorrect? · Issue #9 · avr-rust/ruduino](https://github.com/avr-rust/ruduino/issues/9)
* [AVR: Interrupt code not protecting registers in subroutine call · Issue #78260 · rust-lang/rust](https://github.com/rust-lang/rust/issues/78260)
* [AVR: interrupt code broken by optimization flags · Issue #77541 · rust-lang/rust](https://github.com/rust-lang/rust/issues/77541)

```
> cargo clean; cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort -Clink-args="-e main -nostartfiles -static" -v ; avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling compiler_builtins v0.1.36
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 10.33s

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr


Disassembly of section .text:

00000000 <main>:
   0:	0e 94 04 00 	call	0x8	; 0x8 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>
   4:	00 c0       	rjmp	.+0      	; 0x6 <main+0x6>
   6:	08 95       	ret

00000008 <_ZN14avr_scratch_003nop17hf96a0dd862cbff72E>:
   8:	00 00       	nop
   a:	08 95       	ret
   ```

### target --target avr-unknown-gnu-atmega328
```
> cargo clean; cargo +nightly-2021-01-07 rustc -Z build-std=core --target avr-unknown-gnu-atmega328 -- -Cpanic=abort -Clink-args="-e main -nostartfiles" -v && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
```

### core
```
> cargo clean; cargo +nightly-2021-01-07 build --target avr-unknown-gnu-atmega328.json && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error[E0463]: can't find crate for `core`
  |
  = note: the `avr-unknown-gnu-atmega328-9986162754639696980` target may not be installed
error: aborting due to previous error
For more information about this error, try `rustc --explain E0463`.
error: could not compile `avr-scratch-00`
To learn more, run the command again with --verbose.
```
#### .cargo/config.toml with unstable build-std
```
# in .cargo/config.toml
[unstable]
build-std = ["core"]
```

#### cargo +nightly build, +nightly-2021-01-07
```
> cargo clean; cargo +nightly build --target avr-unknown-gnu-atmega328.json && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.55
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
error: ran out of registers during register allocation
error: could not compile `core` due to previous error
warning: build failed, waiting for other jobs to finish...
error: build failed

> cargo clean; cargo +nightly-2021-01-07 build --target avr-unknown-gnu-atmega328.json && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: language item required, but not found: `eh_personality`
error: aborting due to previous error
error: could not compile `avr-scratch-00`
To learn more, run the command again with --verbose.
```

#### add panic=abort in Cargo.toml, "-nostartfiles"
```
[profile.dev]
panic = "abort"

[profile.release]
panic = "abort"

> cargo clean; cargo +nightly-2021-01-07 rustc --target avr-unknown-gnu-atmega328.json -- -Cpanic=abort && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `avr-gcc` failed: exit code: 1
  |
  = note: "avr-gcc" "-mmcu=atmega328" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-f2572d6db2452790.26znjzncfwc4t209.rcgu.o" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-f2572d6db2452790.elf" "-Wl,--gc-sections" "-nodefaultlibs" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "-Wl,-Bstatic" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/librustc_std_workspace_core-a3b677e7a4368e5b.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcore-3966e64598046d65.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcompiler_builtins-0cd7f42db20de4a0.rlib" "-Wl,-Bdynamic"
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x4): undefined reference to `exit'
          collect2: error: ld returned 1 exit status
error: aborting due to previous error
error: could not compile `avr-scratch-00`
To learn more, run the command again with --verbose.

"-nostartfiles"

> cargo clean; cargo +nightly-2021-01-07 build --target avr-unknown-gnu-atmega328.json  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling compiler_builtins v0.1.36
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 9.06s
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr

# append into .cargo/config.toml
[build]
target = "avr-unknown-gnu-atmega328.json"

> cargo clean; cargo +nightly-2021-01-07 build  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 8.84s
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr

```

### "-lgcc" add _copy_data and _clear_bss, without "-nostartfiles"
```
"-lgcc"

> cargo clean; cargo +nightly-2021-01-07 build  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 9.04s
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <__do_copy_data>:
   0:	11 e0       	ldi	r17, 0x01	; 1
   2:	a0 e0       	ldi	r26, 0x00	; 0
   4:	b1 e0       	ldi	r27, 0x01	; 1
   6:	e6 e2       	ldi	r30, 0x26	; 38
   8:	f0 e0       	ldi	r31, 0x00	; 0
   a:	02 c0       	rjmp	.+4      	; 0x10 <__do_copy_data+0x10>
   c:	05 90       	lpm	r0, Z+
   e:	0d 92       	st	X+, r0
  10:	a0 30       	cpi	r26, 0x00	; 0
  12:	b1 07       	cpc	r27, r17
  14:	d9 f7       	brne	.-10     	; 0xc <__do_copy_data+0xc>
00000016 <__do_clear_bss>:
  16:	21 e0       	ldi	r18, 0x01	; 1
  18:	a0 e0       	ldi	r26, 0x00	; 0
  1a:	b1 e0       	ldi	r27, 0x01	; 1
  1c:	01 c0       	rjmp	.+2      	; 0x20 <.do_clear_bss_start>
0000001e <.do_clear_bss_loop>:
  1e:	1d 92       	st	X+, r1
00000020 <.do_clear_bss_start>:
  20:	a0 30       	cpi	r26, 0x00	; 0
  22:	b2 07       	cpc	r27, r18
  24:	e1 f7       	brne	.-8      	; 0x1e <.do_clear_bss_loop>
```

### remove "-lgcc" (_copy_data and _clear_bss), remove "-nostartfiles" (add C Run Time)
* -nostartfiles or -nodefaultlibs options (the -nodefaultlibs does not work)
* [What is the "Startup Code" and where does it come | AVR Freaks](https://www.avrfreaks.net/forum/what-startup-code-and-where-does-it-come)
* [avr-libc/gcrt1.S at master · vancegroup-mirrors/avr-libc](https://github.com/vancegroup-mirrors/avr-libc/blob/master/avr-libc/crt1/gcrt1.S)
* [Startup.s file in Atmel Studio using GCC | AVR Freaks](https://www.avrfreaks.net/forum/startups-file-atmel-studio-using-gcc)
* [arduino - where to find GCC atmega328 startup code and linkerscript - Stack Overflow](https://stackoverflow.com/questions/28092163/where-to-find-gcc-atmega328-startup-code-and-linkerscript)

```
> cargo clean; cargo +nightly-2021-01-07 build  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
error: linking with `avr-gcc` failed: exit code: 1
  = note: "avr-gcc" "-mmcu=atmega328" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-f2572d6db2452790.26znjzncfwc4t209.rcgu.o" "-o" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/avr_scratch_00-f2572d6db2452790.elf" "-Wl,--gc-sections" "-nodefaultlibs" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps" "-L" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/debug/deps" "-L" "/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/avr-unknown-gnu-atmega328/lib" "-Wl,-Bstatic" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/librustc_std_workspace_core-a3b677e7a4368e5b.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcore-3966e64598046d65.rlib" "/Users/laris/coding/rust-embedded/avr-scratch-00/target/avr-unknown-gnu-atmega328/debug/deps/libcompiler_builtins-0cd7f42db20de4a0.rlib" "-Wl,-Bdynamic"
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x4): undefined reference to `exit'
          collect2: error: ld returned 1 exit status
error: aborting due to previous error
error: could not compile `avr-scratch-00`
To learn more, run the command again with --verbose.
```
#### add exit function
```
#[no_mangle]
pub extern "C" fn exit() { }

[15:07:19] laris@MBP-P5750 /Users/laris/coding/rust-embedded/avr-scratch-00 [101]
> cargo clean; cargo +nightly-2021-01-07 build  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished dev [unoptimized + debuginfo] target(s) in 8.83s

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr


Disassembly of section .text:

00000000 <__vectors>:
   0:	0c 94 34 00 	jmp	0x68	; 0x68 <__ctors_end>
   4:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
   8:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
   c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  10:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  14:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  18:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  1c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  20:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  24:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  28:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  2c:	0c 94 47 00 	jmp	0x8e	; 0x8e <__vector_11>
  30:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  34:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  38:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  3c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  40:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  44:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  48:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  4c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  50:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  54:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  58:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  5c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  60:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  64:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
00000068 <__ctors_end>:
  68:	11 24       	eor	r1, r1
  6a:	1f be       	out	0x3f, r1	; 63
  6c:	cf ef       	ldi	r28, 0xFF	; 255
  6e:	d8 e0       	ldi	r29, 0x08	; 8
  70:	de bf       	out	0x3e, r29	; 62
  72:	cd bf       	out	0x3d, r28	; 61
  74:	0e 94 40 00 	call	0x80	; 0x80 <main>
  78:	0c 94 44 00 	jmp	0x88	; 0x88 <exit>
0000007c <__bad_interrupt>:
  7c:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>
00000080 <main>:
  80:	0e 94 45 00 	call	0x8a	; 0x8a <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>
  84:	00 c0       	rjmp	.+0      	; 0x86 <main+0x6>
  86:	08 95       	ret
00000088 <exit>:
  88:	08 95       	ret
0000008a <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>:
  8a:	00 00       	nop
  8c:	08 95       	ret
0000008e <__vector_11>:
  8e:	0f 92       	push	r0
  90:	1f 92       	push	r1
  92:	0f b6       	in	r0, 0x3f	; 63
  94:	0f 92       	push	r0
  96:	00 24       	eor	r0, r0
  98:	0e 94 45 00 	call	0x8a	; 0x8a <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>
  9c:	00 c0       	rjmp	.+0      	; 0x9e <__vector_11+0x10>
  9e:	0f 90       	pop	r0
  a0:	0f be       	out	0x3f, r0	; 63
  a2:	1f 90       	pop	r1
  a4:	0f 90       	pop	r0
  a6:	18 95       	reti

> cargo clean; cargo +nightly-2021-01-07 build  --release && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling compiler_builtins v0.1.36
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
    Finished release [optimized] target(s) in 9.19s
avr-objdump: 'target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf': No such file

> avr-objdump -dz  target/avr-unknown-gnu-atmega328/release/avr-scratch-00.elf
target/avr-unknown-gnu-atmega328/release/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <__vectors>:
   0:	0c 94 34 00 	jmp	0x68	; 0x68 <__ctors_end>
   4:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
   8:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
   c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  10:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  14:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  18:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  1c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  20:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  24:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  28:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  2c:	0c 94 43 00 	jmp	0x86	; 0x86 <__vector_11>
  30:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  34:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  38:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  3c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  40:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  44:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  48:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  4c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  50:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  54:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  58:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  5c:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  60:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
  64:	0c 94 3e 00 	jmp	0x7c	; 0x7c <__bad_interrupt>
00000068 <__ctors_end>:
  68:	11 24       	eor	r1, r1
  6a:	1f be       	out	0x3f, r1	; 63
  6c:	cf ef       	ldi	r28, 0xFF	; 255
  6e:	d8 e0       	ldi	r29, 0x08	; 8
  70:	de bf       	out	0x3e, r29	; 62
  72:	cd bf       	out	0x3d, r28	; 61
  74:	0e 94 40 00 	call	0x80	; 0x80 <main>
  78:	0c 94 42 00 	jmp	0x84	; 0x84 <exit>
0000007c <__bad_interrupt>:
  7c:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>
00000080 <main>:
  80:	00 00       	nop
  82:	08 95       	ret
00000084 <exit>:
  84:	08 95       	ret
00000086 <__vector_11>:
  86:	0f 92       	push	r0
  88:	1f 92       	push	r1
  8a:	0f b6       	in	r0, 0x3f	; 63
  8c:	0f 92       	push	r0
  8e:	00 24       	eor	r0, r0
  90:	00 00       	nop
  92:	0f 90       	pop	r0
  94:	0f be       	out	0x3f, r0	; 63
  96:	1f 90       	pop	r1
  98:	0f 90       	pop	r0
  9a:	18 95       	reti
```

#### --no-gc-sections
```
  "post-link-args": {
    "gcc": ["-Wl,--no-gc-sections"]
  },

00000080 <rust_begin_unwind>:
  80:	cf 93       	push	r28
  82:	df 93       	push	r29
  84:	cd b7       	in	r28, 0x3d	; 61
  86:	de b7       	in	r29, 0x3e	; 62
  88:	22 97       	sbiw	r28, 0x02	; 2
  8a:	0f b6       	in	r0, 0x3f	; 63
  8c:	f8 94       	cli
  8e:	de bf       	out	0x3e, r29	; 62
  90:	0f be       	out	0x3f, r0	; 63
  92:	cd bf       	out	0x3d, r28	; 61
  94:	89 83       	std	Y+1, r24	; 0x01
  96:	9a 83       	std	Y+2, r25	; 0x02
  98:	00 c0       	rjmp	.+0      	; 0x9a <rust_begin_unwind+0x1a>
  9a:	ff cf       	rjmp	.-2      	; 0x9a <rust_begin_unwind+0x1a>


```

### try to replace main entry point, failed
```
{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328"
    ]
  },
  "post-link-args": {
    "gcc": []
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16",
  "---- no-gc-sections ----": "-Wl,--no-gc-sections",
  "---- nostartfiles ----": "-nostartfiles",
  "---- lgcc ----": "-lgcc",
  "---- ----": ""
}


#![no_std]
#![no_main]
#![feature(asm)]
#![feature(llvm_asm)]
#![feature(core_intrinsics)]
#![feature(abi_avr_interrupt)]

// bare metal PORTB define
const PINB:  *mut u8 = 0x23 as *mut u8;
const PINB5:  u8 = 0x5 ;// as *mut u8;
const DDRB:  *mut u8 = 0x24 as *mut u8;
const PORTB: *mut u8 = 0x25 as *mut u8;

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
pub extern "C" fn _start() -> ! { loop {} }
//pub extern "C" fn main() { nop(); }

//#[no_mangle]
//pub extern "C" fn exit() { }

fn nop() {
    unsafe {
        llvm_asm!("NOP");
    }
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn __vector_11() {
    nop();
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn _ivr_timer1_compare_a() {
    let prev_value = core::intrinsics::volatile_load(PORTB);
    core::intrinsics::volatile_store(PORTB, prev_value ^ PINB5);
}

> cargo clean; cargo +nightly-2021-01-07 build  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf

error: linking with `avr-gcc` failed: exit code: 1
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x0): undefined reference to `main'
          /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x4): undefined reference to `exit'
          collect2: error: ld returned 1 exit status


> cargo clean; cargo +nightly-2021-01-07 rustc -- -Clink-args="-e _start"  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf

error: linking with `avr-gcc` failed: exit code: 1
  = note: /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x0): undefined reference to `main'
          /usr/local/opt/avr-binutils/bin/avr-ld: /usr/local/Cellar/avr-gcc@9/9.3.0_3/lib/avr-gcc/9/gcc/avr/9.3.0/../../../../../../avr/lib/avr5/crtatmega328.o:(.init9+0x4): undefined reference to `exit'
          collect2: error: ld returned 1 exit status
```
#### entry point change
```
{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328"
    ]
  },
  "post-link-args": {
    "gcc": []
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16",
  "---- no-gc-sections ----": "-Wl,--no-gc-sections",
  "---- nostartfiles ----": "-nostartfiles",
  "---- lgcc ----": "-lgcc",
  "---- ----": ""
}

#![no_std]
#![no_main]
#![feature(asm)]
#![feature(llvm_asm)]
#![feature(core_intrinsics)]
#![feature(abi_avr_interrupt)]

// bare metal PORTB define
const PINB:  *mut u8 = 0x23 as *mut u8;
const PINB5:  u8 = 0x5 ;// as *mut u8;
const DDRB:  *mut u8 = 0x24 as *mut u8;
const PORTB: *mut u8 = 0x25 as *mut u8;

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
pub extern "C" fn _start() -> ! { loop{} }
//pub extern "C" fn main() { nop(); }

//#[no_mangle]
//pub extern "C" fn exit() { }

fn nop() {
    unsafe {
        llvm_asm!("NOP");
    }
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn __vector_11() {
    nop();
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn _ivr_timer1_compare_a() {
    let prev_value = core::intrinsics::volatile_load(PORTB);
    core::intrinsics::volatile_store(PORTB, prev_value ^ PINB5);
}

> cargo clean; cargo +nightly-2021-01-07 rustc -- -Clink-args="-e _start -nostartfiles"  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf
   Compiling core v0.0.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/core)
   Compiling compiler_builtins v0.1.36
   Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rust/rustup/toolchains/nightly-2021-01-07-x86_64-apple-darwin/lib/rustlib/src/rust/library/rustc-std-workspace-core)
   Compiling avr-scratch-00 v0.1.0 (/Users/laris/coding/rust-embedded/avr-scratch-00)
   Finished dev [unoptimized + debuginfo] target(s) in 9.10s
target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <_start>:
   0:	00 c0       	rjmp	.+0      	; 0x2 <_start+0x2>
   2:	ff cf       	rjmp	.-2      	; 0x2 <_start+0x2>
```

#### test with target json
```
{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328",
      "-nostartfiles"
    ]
  },
  "post-link-args": {
    "gcc": [
      "-Wl,--entry=main"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16",
  "---- no-gc-sections ----": "-Wl,--no-gc-sections",
  "---- nostartfiles ----": "-nostartfiles",
  "---- lgcc ----": "-lgcc",
  "---- post-link-arg": "-Wl,--entry=main",
  "---- ----": ""
}


#![no_std]
#![no_main]
#![feature(asm)]
#![feature(llvm_asm)]
#![feature(core_intrinsics)]
#![feature(abi_avr_interrupt)]

// bare metal PORTB define
const PINB:  *mut u8 = 0x23 as *mut u8;
const PINB5:  u8 = 0x5 ;// as *mut u8;
const DDRB:  *mut u8 = 0x24 as *mut u8;
const PORTB: *mut u8 = 0x25 as *mut u8;

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
//pub extern "C" fn _start() -> ! { loop{} }
pub extern "C" fn main() { nop(); }

//#[no_mangle]
//pub extern "C" fn exit() { }

fn nop() {
    unsafe {
        llvm_asm!("NOP");
    }
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn __vector_11() {
    nop();
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn _ivr_timer1_compare_a() {
    let prev_value = core::intrinsics::volatile_load(PORTB);
    core::intrinsics::volatile_store(PORTB, prev_value ^ PINB5);
}

> cargo clean; cargo +nightly-2021-01-07 build -v  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <main>:
   0:	0e 94 04 00 	call	0x8	; 0x8 <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>
   4:	00 c0       	rjmp	.+0      	; 0x6 <main+0x6>
   6:	08 95       	ret
00000008 <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>:
   8:	00 00       	nop
   a:	08 95       	ret

> cargo clean; cargo +nightly-2021-01-07 build --release -v  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf; avr-objdump -dz target/avr-unknown-gnu-atmega328/release/avr-scratch-00.elf

target/avr-unknown-gnu-atmega328/release/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <main>:
   0:	00 00       	nop
   2:	08 95       	ret
```


## interrupt
```
interrupt_vector.S
linker-script

{
  "arch": "avr",
  "atomic-cas": false,
  "cpu": "atmega328",
  "data-layout": "e-P1-p:16:8-i8:8-i16:8-i32:8-i64:8-f32:8-f64:8-n8-a:8",
  "eh-frame-header": false,
  "exe-suffix": ".elf",
  "executables": true,
  "is-builtin": false,
  "late-link-args": {
    "gcc": [
    ]
  },
  "linker": "avr-gcc",
  "llvm-target": "avr-unknown-unknown",
  "max-atomic-width": 0,
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328",
      "-nostartfiles"
    ]
  },
  "post-link-args": {
    "gcc": [
      "-Wl,--entry=main",
      "-T",
      "./linker-script",
      "./interrupt_vector.S"
    ]
  },
  "target-c-int-width": "16",
  "target-pointer-width": "16",
  "---- no-gc-sections ----": "-Wl,--no-gc-sections",
  "---- nostartfiles ----": "-nostartfiles",
  "---- lgcc ----": "-lgcc",
  "---- post-link-arg": "-Wl,--entry=main",
  "---- as-need": "-Wl,--as-needed",
  "---- ----": ""
}

#![no_std]
#![no_main]
#![feature(asm)]
#![feature(llvm_asm)]
#![feature(core_intrinsics)]
#![feature(abi_avr_interrupt)]

// bare metal PORTB define
const PINB:  *mut u8 = 0x23 as *mut u8;
const PINB5:  u8 = 0x5 ;// as *mut u8;
const DDRB:  *mut u8 = 0x24 as *mut u8;
const PORTB: *mut u8 = 0x25 as *mut u8;

#[panic_handler]
fn panic(_panic_info: &core::panic::PanicInfo) -> ! { loop {} }
//fn main() { }
#[no_mangle]
//pub extern "C" fn _start() -> ! { loop{} }
pub extern "C" fn main() { nop(); }

//#[no_mangle]
//pub extern "C" fn exit() { }

fn nop() {
    unsafe {
        llvm_asm!("NOP");
    }
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn __vector_11() {
    nop();
}

#[no_mangle]
pub unsafe extern "avr-interrupt" fn _ivr_timer1_compare_a() {
    let prev_value = core::intrinsics::volatile_load(PORTB);
    core::intrinsics::volatile_store(PORTB, prev_value ^ PINB5);
}

> cargo clean; cargo +nightly-2021-01-07 build --all -v  && avr-objdump -dz target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf; avr-objdump -dz target/avr-unknown-gnu-atmega328/release/avr-scratch-00.elf

target/avr-unknown-gnu-atmega328/debug/avr-scratch-00.elf:     file format elf32-avr
Disassembly of section .text:
00000000 <ivr>:
   0:	0c 94 35 00 	jmp	0x6a	; 0x6a <main>
   4:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
   8:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
   c:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  10:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  14:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  18:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  1c:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  20:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  24:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  28:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  2c:	0c 94 3b 00 	jmp	0x76	; 0x76 <_ivr_timer1_compare_a>
  30:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  34:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  38:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  3c:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  40:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  44:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  48:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  4c:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  50:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  54:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  58:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  5c:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  60:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>
  64:	0c 94 34 00 	jmp	0x68	; 0x68 <_ivr_adc_conversion_complete>

00000068 <_ivr_adc_conversion_complete>:
  68:	18 95       	reti

0000006a <main>:
  6a:	0e 94 39 00 	call	0x72	; 0x72 <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>
  6e:	00 c0       	rjmp	.+0      	; 0x70 <main+0x6>
  70:	08 95       	ret

00000072 <_ZN14avr_scratch_003nop17hb08a1a9ca368374eE>:
  72:	00 00       	nop
  74:	08 95       	ret

00000076 <_ivr_timer1_compare_a>:
  76:	0f 92       	push	r0
  78:	1f 92       	push	r1
  7a:	0f b6       	in	r0, 0x3f	; 63
  7c:	0f 92       	push	r0
  7e:	00 24       	eor	r0, r0
  80:	8f 93       	push	r24
  82:	9f 93       	push	r25
  84:	cf 93       	push	r28
  86:	df 93       	push	r29
  88:	cd b7       	in	r28, 0x3d	; 61
  8a:	de b7       	in	r29, 0x3e	; 62
  8c:	23 97       	sbiw	r28, 0x03	; 3
  8e:	0f b6       	in	r0, 0x3f	; 63
  90:	f8 94       	cli
  92:	de bf       	out	0x3e, r29	; 62
  94:	0f be       	out	0x3f, r0	; 63
  96:	cd bf       	out	0x3d, r28	; 61
  98:	85 b1       	in	r24, 0x05	; 5
  9a:	8a 83       	std	Y+2, r24	; 0x02
  9c:	8a 81       	ldd	r24, Y+2	; 0x02
  9e:	8b 83       	std	Y+3, r24	; 0x03
  a0:	89 83       	std	Y+1, r24	; 0x01
  a2:	00 c0       	rjmp	.+0      	; 0xa4 <_ivr_timer1_compare_a+0x2e>
  a4:	85 e0       	ldi	r24, 0x05	; 5
  a6:	99 81       	ldd	r25, Y+1	; 0x01
  a8:	98 27       	eor	r25, r24
  aa:	95 b9       	out	0x05, r25	; 5
  ac:	00 c0       	rjmp	.+0      	; 0xae <_ivr_timer1_compare_a+0x38>
  ae:	23 96       	adiw	r28, 0x03	; 3
  b0:	0f b6       	in	r0, 0x3f	; 63
  b2:	f8 94       	cli
  b4:	de bf       	out	0x3e, r29	; 62
  b6:	0f be       	out	0x3f, r0	; 63
  b8:	cd bf       	out	0x3d, r28	; 61
  ba:	df 91       	pop	r29
  bc:	cf 91       	pop	r28
  be:	9f 91       	pop	r25
  c0:	8f 91       	pop	r24
  c2:	0f 90       	pop	r0
  c4:	0f be       	out	0x3f, r0	; 63
  c6:	1f 90       	pop	r1
  c8:	0f 90       	pop	r0
  ca:	18 95       	reti

--release

0000006a <main>:
  6a:	00 00       	nop
  6c:	08 95       	ret
0000006e <_ivr_timer1_compare_a>:
  6e:	0f 92       	push	r0
  70:	1f 92       	push	r1
  72:	0f b6       	in	r0, 0x3f	; 63
  74:	0f 92       	push	r0
  76:	00 24       	eor	r0, r0
  78:	8f 93       	push	r24
  7a:	9f 93       	push	r25
  7c:	85 e0       	ldi	r24, 0x05	; 5
  7e:	95 b1       	in	r25, 0x05	; 5
  80:	98 27       	eor	r25, r24
  82:	95 b9       	out	0x05, r25	; 5
  84:	9f 91       	pop	r25
  86:	8f 91       	pop	r24
  88:	0f 90       	pop	r0
  8a:	0f be       	out	0x3f, r0	; 63
  8c:	1f 90       	pop	r1
  8e:	0f 90       	pop	r0
  90:	18 95       	reti
```
## [Rust on arduino 1-6 Jake Goulding](http://jakegoulding.com/blog/categories/arduino/)


## Cargo.toml profile.dev profile.release 
* [AVR: interrupt code broken by unused alloca · Issue #75504 · rust-lang/rust](https://github.com/rust-lang/rust/issues/75504)
  - https://github.com/rust-lang/rust/issues/75504#issuecomment-703220105 
  - [m48_robo_rust/Cargo.toml at master · no111u3/m48_robo_rust](https://github.com/no111u3/m48_robo_rust/blob/master/Cargo.toml)
  > I create example with some activity in interrupt: https://github.com/no111u3/m48_robo_rust/blob/master/examples/timer_compare.rs.
  > It corrupt run than I build in debug and disaster interrupt logic than I build in release mode.
  > Some updates: I build this code with different optimization and has success run with use - opt-level=2 in release mode.
  - [AVR: Interrupt code not protecting registers in subroutine call · Issue #78260 · rust-lang/rust](https://github.com/rust-lang/rust/issues/78260)
  - maybe fixed ?
  
```
# Configure the build for minimal size
[profile.dev]
panic = "abort"
lto = true
opt-level = "s"

[profile.release]
panic = "abort"
codegen-units = 1
debug = true
lto = true
opt-level = 2
```

### adjust interrupt standalone
* [Copy globals from program memory into RAM · Issue #71 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/71)
* https://github.com/avr-rust/rust-legacy-fork/issues/71#issuecomment-324631895
```
https://github.com/shepmaster/rust-arduino-blink-led-no-core-with-cargo/blob/d85d11171152d25d11c58ccb19270cffa545b18b/blink/src/main.rs#L65-L71
        unsafe { asm!("eor r1, r1"); }

        unsafe {
            write_volatile(SP, CPU_RAM_BYTES);
        }

        initialize_memory();

https://github.com/shepmaster/rust-arduino-blink-led-no-core-with-cargo/blob/d85d11171152d25d11c58ccb19270cffa545b18b/blink/arduino.json#L17-L54
{
  "llvm-target": "avr-atmel-none",
  "cpu": "atmega328p",

  "target-endian": "little",
  "target-pointer-width": "16",
  "os": "none",
  "target-env": "gnu",
  "target-vendor": "unknown",
  "arch": "avr",
  "data-layout": "e-p:16:16:16-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-n8",

  "executables": true,

  "linker": "avr-gcc",
  "linker-flavor": "gcc",
  "pre-link-args": {
    "gcc": [
      "-mmcu=atmega328p",
      "-nostartfiles",
      "../interrupt_vector.S",
      "../initialize_memory.S"
    ]
  },
  "exe-suffix": ".elf",
  "post-link-args": {
    "gcc": [
      "-Wl,--entry=main",
      "-Wl,--entry=_ivr_irq0",
      "-Wl,--entry=_ivr_irq1",
      "-Wl,--entry=_ivr_pin_change_0",
      "-Wl,--entry=_ivr_pin_change_1",
      "-Wl,--entry=_ivr_pin_change_2",
      "-Wl,--entry=_ivr_watchdog_timer",
      "-Wl,--entry=_ivr_timer2_compare_a",
      "-Wl,--entry=_ivr_timer2_compare_b",
      "-Wl,--entry=_ivr_timer2_overflow",
      "-Wl,--entry=_ivr_timer1_capture",
      "-Wl,--entry=_ivr_timer1_compare_a",
      "-Wl,--entry=_ivr_timer1_compare_b",
      "-Wl,--entry=_ivr_timer1_overflow",
      "-Wl,--entry=_ivr_timer0_compare_a",
      "-Wl,--entry=_ivr_timer0_compare_b",
      "-Wl,--entry=_ivr_timer0_overflow",
      "-Wl,--entry=_ivr_spi_transfer_complete",
      "-Wl,--entry=_ivr_usart_rx_complete",
      "-Wl,--entry=_ivr_usart_udr_empty",
      "-Wl,--entry=_ivr_usart_tx_complete",
      "-Wl,--entry=_ivr_adc_conversion_complete",
      "-Wl,--entry=_ivr_eeprom_ready",
      "-Wl,--entry=_ivr_analog_comparator",
      "-Wl,--entry=_ivr_two_wire_serial_interface",
      "-Wl,--entry=_ivr_store_program_memory_ready"
    ]
  },

  "no-compiler-rt": true
}

https://github.com/shepmaster/rust-arduino-blink-led-no-core-with-cargo/blob/d85d11171152d25d11c58ccb19270cffa545b18b/interrupt_vector.S
ivr:
        jmp _ivr_reset
        jmp _ivr_irq0
        jmp _ivr_irq1
        jmp _ivr_pin_change_0
        jmp _ivr_pin_change_1
        jmp _ivr_pin_change_2
        jmp _ivr_watchdog_timer
        jmp _ivr_timer2_compare_a
        jmp _ivr_timer2_compare_b
        jmp _ivr_timer2_overflow
        jmp _ivr_timer1_capture
        jmp _ivr_timer1_compare_a
        jmp _ivr_timer1_compare_b
        jmp _ivr_timer1_overflow
        jmp _ivr_timer0_compare_a
        jmp _ivr_timer0_compare_b
        jmp _ivr_timer0_overflow
        jmp _ivr_spi_transfer_complete
        jmp _ivr_usart_rx_complete
        jmp _ivr_usart_udr_empty
        jmp _ivr_usart_tx_complete
        jmp _ivr_adc_conversion_complete
        jmp _ivr_eeprom_ready
        jmp _ivr_analog_comparator
        jmp _ivr_two_wire_serial_interface
        jmp _ivr_store_program_memory_ready

_ivr_undefined:
        reti

;;; By default, start all interrupt handlers as doing a no-op
;;; return. Since these symbols are weakly linked, user code can
;;; override each one on demand.
.macro _ivr_default name target=_ivr_undefined
.weak \name
.set  \name, \target
.endm

_ivr_default _ivr_reset main    ; Default to `main` here, no need for indirection
_ivr_default _ivr_irq0
_ivr_default _ivr_irq1
_ivr_default _ivr_pin_change_0
_ivr_default _ivr_pin_change_1
_ivr_default _ivr_pin_change_2
_ivr_default _ivr_watchdog_timer
_ivr_default _ivr_timer2_compare_a
_ivr_default _ivr_timer2_compare_b
_ivr_default _ivr_timer2_overflow
_ivr_default _ivr_timer1_capture
_ivr_default _ivr_timer1_compare_a
_ivr_default _ivr_timer1_compare_b
_ivr_default _ivr_timer1_overflow
_ivr_default _ivr_timer0_compare_a
_ivr_default _ivr_timer0_compare_b
_ivr_default _ivr_timer0_overflow
_ivr_default _ivr_spi_transfer_complete
_ivr_default _ivr_usart_rx_complete
_ivr_default _ivr_usart_udr_empty
_ivr_default _ivr_usart_tx_complete
_ivr_default _ivr_adc_conversion_complete
_ivr_default _ivr_eeprom_ready
_ivr_default _ivr_analog_comparator
_ivr_default _ivr_two_wire_serial_interface
_ivr_default _ivr_store_program_memory_ready
```

### linker
* [Copy globals from program memory into RAM · Issue #71 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/71)
* https://github.com/avr-rust/rust-legacy-fork/issues/71#issuecomment-328673915
> Alright, so __do_copy_data is defined in the CRT libraries.
> It appears that if you declare the symbol, the CRT library will call it before it calls main. If you do not declare it, it isn't called and the function doesn't make it into the final object file.
> Thus, if you don't want to use it, then don't link the CRT. I believe this works well because you're trying to avoid libc/crt code, and so there's no issue there.
> In the case where no CRT is linked, it just means there is one extra symbol in the executable, but I imagine that it will get trimmed out as there are no references to it.
> For the other readers, linking with avr-gcc will always link the CRT and avr-libc. This is because using a C compiler to link will result in a C-centric executable. Because of this, using avr-gcc to link with avr-llvm now will always result in data being copied to RAM and BSS being cleared, which is good.
> Now, if you link with avr-ld, you do not automatically include the CRT or avr-libc. This means that doing this will not result in do_copy_data being called. In this case, you will need to roll that functionality yourself.



### "max-atomic-width": 16
* [Make Send+Sync impls optional for compatibility with AVR by agausmann · Pull Request #70 · mvirkkunen/usb-device](https://github.com/mvirkkunen/usb-device/pull/70)

# cargo +nightly-2021-01-07 build
* ["LLVM ERROR: Not supported instr" on avr-unknown-gnu-atmega328 · Issue #400 · rust-lang/compiler-builtins](https://github.com/rust-lang/compiler-builtins/issues/400)
* [AVR: Cannot compile compiler_builtins in either release or debug mode with nightly 2021-08-21 · Issue #88252 · rust-lang/rust](https://github.com/rust-lang/rust/issues/88252)
* [Rahix/avr-hal#124](https://github.com/Rahix/avr-hal/issues/124)
* [⚙ D114611 [AVR] Expand STDWSPQRr & STDSPQRr, approach #2](https://reviews.llvm.org/D114611)

# AVR rust llvm merge to upstream
* [RFC: Merging the avr-rust fork upstream · Issue #44052 · rust-lang/rust](https://github.com/rust-lang/rust/issues/44052)



# cargo rustup toolchain pin
* [Overrides - The rustup book](https://rust-lang.github.io/rustup/overrides.html)
* [Overrides - The rustup book](https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file)

# cargo build debug release
* [rust - Can I do a cargo build with debug symbols as well as release flag? - Stack Overflow](https://stackoverflow.com/questions/54230418/can-i-do-a-cargo-build-with-debug-symbols-as-well-as-release-flag)


## > cargo build && avr-objdump -dz target/avr-*/*/*.elf

## .cargo/config.toml link-args
* [How to pass cargo linker args? - The Rust Programming Language Forum](https://users.rust-lang.org/t/how-to-pass-cargo-linker-args/3163/2)
* https://doc.rust-lang.org/cargo/reference/config.html#target
```
# my first
#[target.avr-atmega328p]
[target.'cfg(all(target_arch = "avr"))']
rustflags = [
  "-C", "link-args=-e main -nostartfiles"
]

[target.'cfg(all(target_arch = "avr"))']
rustflags = [ 
  "-Clink-args=-e main",
  "-Clink-args=-nostartfiles",
  "-Clink-args=-T linker-script interrupt_vector.S",
]
'-Clink-arg=-e main' -Clink-arg=-nostartfiles '-Clink-args=-T linker-script interrupt_vector.S'

# doc
[target.thumbv7m-none-eabi]
linker = "arm-none-eabi-gcc"
runner = "my-emulator"
rustflags = ["…", "…"]

[target.'cfg(all(target_arch = "arm", target_os = "none"))']
runner = "my-arm-wrapper"
rustflags = ["…", "…"]

# user.rusg-lang.org
~/.cargo/config:
[target.armv7-unknown-linux-gnueabihf]
linker = “arm-linux-gnueabihf-gcc"
rustflags = [”-Clink-args=-Xlinker -rpath=/usr/lib/arm-linux-gnueabihf"]

[target.thumbv7em-none-eabi]
rustflags = [
  "-C", "link-arg=-Tlayout.ld",
  "-C", "link-arg=-nostartfiles",
  "-C", "link-arg=-Wl,-Map=firmware.map",
  "-C", "target-cpu=cortex-m4",
  "-C", "target-feature=+soft-float",
]
```
## link error with abort, profile.dev profile.release config
* [SIGSEGV when compiling on latest nightly · Issue #25 · avr-rust/blink](https://github.com/avr-rust/blink/issues/25)
* [Error: linking with avr-gcc failed · Issue #149 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/149)
```
[profile.dev]
opt-level = "s"
debug = false
debug-assertions = false
overflow-checks = false
lto = false
panic = "abort"
```
* my config 2021-12-17
```
[profile.dev]
panic = "abort"
debug = false
debug-assertions = false
overflow-checks = false
lto = false
opt-level = "s"
codegen-units = 1

[profile.release]
panic = "abort"
debug = false
debug-assertions = false
overflow-checks = false
lto = true 
opt-level = "s"
codegen-units = 1
```
* [Nov 30 2020 05:12](https://gitter.im/avr-rust/Lobby?at=5fc40edab956e94695a7f756)
```
Rahix @Rahix Nov 30 2020 05:12
the debug info is never actually written to the target on embedded devices - that would just be a waste of space. Instead, the debug flag controls where or not debug info is emitted. This debug info could then be given to a debugger that attatches remotely and would help with understanding the state of the device
thus, the actual binary, the thing written to the target, will be the same, no matter if debug is on or off
and in fact, it is good a practice to configure
[profile.release]
debug=true
so you will have the debug symbols available for release binaries as well
```

* [Undefined reference to core::panicking::panic · Issue #245 · rust-lang/compiler-builtins](https://github.com/rust-lang/compiler-builtins/issues/245)

## objdump 
 * avr-objdump -dzrwx
 * avr-objdump -dzrwxS
  > -d, --disassemble        Display assembler contents of executable sections
  > -z, --disassemble-zeroes       Do not skip blocks of zeroes when disassembling
  > -r, --reloc              Display the relocation entries in the file

  > -w, --wide                     Format output for more than 80 columns
  > -x, --all-headers        Display the contents of all headers
  > -f, --file-headers       Display the contents of the overall file header
  > -h, --[section-]headers  Display the contents of the section headers

  > -l, --line-numbers             Include line numbers and filenames in output
  > -S, --source             Intermix source code with disassembly
  > --source-comment[=<txt>] Prefix lines of source code with <txt>

  > -s, --full-contents      Display the full contents of all sections requested
  > -D, --disassemble-all    Display assembler contents of all sections

 * Debugging the output with `avr-objdump -w -s -x -D output.elf` is very useful.
 * avr-objdump -dzhfr target/avr-*/*/*.elf

```
> avr-objdump -dzhfr target/avr-*/*/*.elf

target/avr-atmega328p/release/avr-rust-study-01-nop.elf:     file format elf32-avr
architecture: avr:5, flags 0x00000112:
EXEC_P, HAS_SYMS, D_PAGED
start address 0x00000000

Sections:
Idx Name          Size      VMA       LMA       File off  Algn
  0 .data         00000000  00800100  00800100  0000005e  2**0
                  CONTENTS, ALLOC, LOAD, DATA
  1 .text         0000000a  00000000  00000000  00000054  2**1
                  CONTENTS, ALLOC, LOAD, READONLY, CODE
  2 .debug_aranges 00000018  00000000  00000000  0000005e  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  3 .debug_pubnames 000000c0  00000000  00000000  00000076  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  4 .debug_info   0000053c  00000000  00000000  00000136  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  5 .debug_abbrev 00000122  00000000  00000000  00000672  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  6 .debug_line   0000008b  00000000  00000000  00000794  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  7 .debug_str    0000044a  00000000  00000000  0000081f  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  8 .debug_loc    0000000f  00000000  00000000  00000c69  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
  9 .debug_pubtypes 00000308  00000000  00000000  00000c78  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS
 10 .debug_ranges 0000000c  00000000  00000000  00000f80  2**0
                  CONTENTS, READONLY, DEBUGGING, OCTETS

Disassembly of section .text:

00000000 <main>:
   0:	00 00       	nop
   2:	00 00       	nop
   4:	00 00       	nop
   6:	00 00       	nop
   8:	ff cf       	rjmp	.-2      	; 0x8 <main+0x8>
   ```

# link_section in program mem 
* [Is the link_section attribute unsound on AVR? - Embedded - The Rust Programming Language Forum](https://users.rust-lang.org/t/is-the-link-section-attribute-unsound-on-avr/48502)
* [Error: linking with avr-gcc failed - Avr-Rust/Rust-Legacy-Fork](https://issueexplorer.com/issue/avr-rust/rust-legacy-fork/149)
* [Constant storage on Harvard architectures? : rust](https://www.reddit.com/r/rust/comments/fd8s0l/constant_storage_on_harvard_architectures/)
* [AVR is Harvard architecture · Issue #53 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/53)
* [Switch lookup tables are not properly placed in program memory · Issue #47 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/47)
* [Copy globals from program memory into RAM · Issue #71 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/71)
* [Sep 26 2017 09:21](https://gitter.im/avr-rust/Lobby?at=59c9ab95b59d55b82338e7e5)
* [Nov 03 2017 09:49](https://gitter.im/avr-rust/Lobby?at=59fbcb46976e63937e1e84d1)
* [Nov 04 2017 15:11](https://gitter.im/avr-rust/Lobby?at=59fd683ae44c43700ab6c05e)
* [Aug 08 00:12](https://gitter.im/avr-rust/Lobby?at=610eb0d88fc359158c5a9ca2)
  > in Rust, there's the avr-progmem crate (https://crates.io/crates/avr-progmem). This allows you to keep the data in FLASH and only load what you need, when you need it. 
  > I think the best way forward would be to move the fonts into an avr-progmem wrapper to keep them out of SRAM. Anything else will not scale well on AVR, I think.
* [Jul 15 2020 23:16](https://gitter.im/avr-rust/Lobby?at=5f0f1dc79c75aa256b40f4be)
* [Nov 12 2017 07:39](https://gitter.im/avr-rust/Lobby?at=5a078a49df09362e67f8d0df)
* [Aug 13 2020 04:54](https://gitter.im/avr-rust/Lobby?at=5f34571f514c484540a5c61d)
  ```
  #[link_section=".progmem"]
  pub static my_var2: [u8; 8]  = *b"deadbeef";
  let result;
  let addr = my_var2.as_ptr();
  unsafe{
      llvm_asm!(
          "lpm $0, Z\n\t"
          : "=r"(result)
          : "=z"(addr)
          : "Z"
          : volatile
      );
  }
  ```
* [Jul 15 2020 23:23](https://gitter.im/avr-rust/Lobby?at=5f0f1f88d60398014651462a)

