# rust-embedded-study-avr
Rust Embedded programming study for AVR

## research and learn
### bool processing
* [bitvec](https://myrrlyn.net/crates/bitvec)
* [bitvec - crates.io: Rust Package Registry](https://crates.io/crates/bitvec)
* [bitvec - Rust](https://docs.rs/bitvec/)
* [bitvecto-rs/bitvec: A crate for managing memory bit by bit](https://github.com/bitvecto-rs/bitvec)

## issues and solution
### progmem variables, immutable const data
 
* [Automatically making immutable const data reside in program memory · Issue #74 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/74)
* [[llvm-dev] Built in progmem variables in AVR](https://lists.llvm.org/pipermail/llvm-dev/2019-November/137191.html)
* [Add syntax for allocating static data to program memory · Issue #84 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/84)
* [Switch lookup tables end up in .data instead of .text by default · Issue #69 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/69)
* [Switch lookup tables are not properly placed in program memory · Issue #47 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/47)
* [AVR is Harvard architecture · Issue #53 · avr-rust/rust-legacy-fork](https://github.com/avr-rust/rust-legacy-fork/issues/53)
* search "LPM" about discusvsion
* [Johannes Wågen @jwagen Aug 13 2020 04:54](https://gitter.im/avr-rust/Lobby?at=5f34571f514c484540a5c61d)
  > I have not seen any of the avr library crate implement functionality for that, but I might have missed something.
  > It should be possible to place a string in flash by doing something like:
  > ```
  > #[link_section=".progmem"]
  > pub static my_var2: [u8; 8]  = *b"deadbeef";
  > ```
  > As far as reading I am not quite sure. On some devices I think you should be able to just use read_volatile, but with devices with more memory I think a little bit of assembly might be possible.
  > Take this with a grain of salt as I have not tried it myself.

* [Johannes Wågen @jwagen Aug 13 2020 05:24](https://gitter.im/avr-rust/Lobby?at=5f345e093cf046461e2f5b87)
  > For the atmega328 I think this should work. I have not tested it but it does compile.
  > let result;
  ```
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

* [Dylan McKay @dylanmckay Sep 26 2017 09:21](https://gitter.im/avr-rust/Lobby?at=59c9ab95b59d55b82338e7e5)
  > Dylan McKay @dylanmckay Sep 26 2017 09:21
  > @neu-rah LLVM is much nicer than GCC in this regard
  > it will never be necessary to have to think about address spaces when loading/storing in any case, because the LLVM language annotates variables with address spaces and generates the correct instruction transparently
  > for example (assume we have an attribute to mark a static as in program memory, which we currently do not)
  > ```#[progmem]
  > static NAME_PROGMEM: &'static str =  "hello world"; // program memory
  > static NAME_RAM: &'static str = "foo bar"; // RAM
  > fn main() {
  >     let length_progmem = NAME_PROGMEM.len();
  >     let length_ram = NAME_RAM.len();
  >     ...
  > } 
  > ```
  > this program will work fine - if Rust marks a variable as in program memory, LLVM will automatically generate a lpm instruction to load from program memory, as opposed to the ld[d] instruction that is usually used for RAM
  > because of this, the Rust code will be indifferent to address space, and we will never need any manky hacks like (PGM_P)pgm_read_word(&(string_table[i])), which GCC uses [1]
  > [1] http://www.nongnu.org/avr-libc/user-manual/pgmspace.html

### `LLVM ERROR: Not supported instr: <MCInst 312 <MCOperand Reg:1> <MCOperand Imm:13> <MCOperand Reg:41>> `
 
* [Jacobtread @jacobtread Oct 18 15:32](https://gitter.im/avr-rust/Lobby?at=616d231138377967f45b0b8f)
  > Hello everyone I am looking to make some custom firmware for my usb rubber ducky from the original firmware source https://github.com/hak5darren/USB-Rubber-Ducky/blob/master/Firmware/Source/Ducky_HID/Framework.config I have gathered that the chip is a Atmel AT32UC3B http://ww1.microchip.com/downloads/en/DeviceDoc/doc32059.pdf and its avr32. I've tried to build the example avr target project thing (build --target avr-unknown-gnu-atmega328 -Z build-std=core --all --release) but it always fails with the following error
  > Compiling compiler_builtins v0.1.49
  > Compiling avr-std-stub v1.0.3
  > LLVM ERROR: Not supported instr: <MCInst 312 <MCOperand Reg:1> <MCOperand Imm:13> <MCOperand Reg:41>>
  > error: could not compile compiler_builtins
  > Process finished with exit code 101
  > Can someone help me get this setup properly or fix this error
  > rahix @rahix:matrix.org [m]  Oct 18 15:46
  > you need an older rust compiler, use nightly-2021-01-07

### `stk500_getsync() attempt 10 of 10: not in sync: resp=0x00`

* https://gitter.im/avr-rust/Lobby?at=6186efd42197144e84ae360a
  > jatsekku @jatsekku:matrix.org [m]  Nov 07 05:12
  > Hi guys! it's not stricte rusty but today i wanted to play with arduino on my arch (5.10.77-3-lts) and I can't connect to bootloader using ravedude/arduino IDE
  > It's based on CH340 and I was getting error avrdude:
  > stk500_getsync() attempt 10 of 10: not in sync: resp=0x00
  > some weeks ago everything was fine but it's not working anymore, I tried to load 'fixed' module: https://aur.archlinux.org/packages/ch34x-dkms-git/ but it didn't help.
  > Do you have any ideas?

### `SIGSEGV when compiling on latest nightly #25`
* [SIGSEGV when compiling on latest nightly · Issue #25 · avr-rust/blink](https://github.com/avr-rust/blink/issues/25)
* [LTO causes undefined references to core::panicking::panic · Issue #79 · rust-lang/compiler-builtins](https://github.com/rust-lang/compiler-builtins/issues/79)

### avr-binutils linker

* [Aug 23 2017 14:38](https://gitter.im/avr-rust/Lobby?at=599d2303ba0f0f6e38d36cbd)
  > Dylan McKay @dylanmckay Aug 23 2017 14:38
  > I think that we'd have to rely on avr-binutils being installed - Rust does not currently use the LLVM linker (it's under the LLVM project, but it's a completely separate library)
  > The function issue is the main one I'm worried about. All of the others have only occurred in libcore, and we commented those parts out
  > I don't think that'd be a problem, I'm sure the ARM Rust target also relies on the ARM binutils linker
  > the compiler-builtins crate would also solve our problems, including the shift operator missing symbol thing
  > of course, it wouldn't be very hard to enable AVR for compiler-rt
  > if we did want to use that library though (or even compiler-rt), we'd have to roll our own versions of the AVR-GCC routines with custom calling conventions
  > and merge it there

## AVR instructions
### Bit transfer BST (Bit STore) BLD (Bit LoaD)
* [equivalent C code for assembly instructions BST, BLD | AVR Freaks](https://www.avrfreaks.net/forum/equivalent-c-code-assembly-instructions-bst-bld)
* [Copy bit from register to register | AVR Freaks](https://www.avrfreaks.net/forum/copy-bit-register-register)
* [AVR GCC writing a bit from one byte into another - EmbDev.net](https://embdev.net/topic/263070)

## AVR Documents
### Rust docs
* [Rust local doc](file:///usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/share/doc/rust/html/index.html)
* [Rust local doc - core lib](file:///usr/local/rust/rustup/toolchains/stable-x86_64-apple-darwin/share/doc/rust/html/core/index.html)


### Rust Tutorial, Summary, quick learn
* [Rust 教程 | 菜鸟教程](https://www.runoob.com/rust/rust-tutorial.html)
* [Rust for Embedded C Programmers | OpenTitan Documentation](https://docs.opentitan.org/doc/ug/rust_for_c/)
  * [【译】为 嵌入式 C 程序员编写的 Rust 指南](https://mp.weixin.qq.com/s/97_PcKN54ktVBYzqvz6g_Q)
    * https://www.notion.so/larisqiao/C-Rust-c71d36dcee8946ddb1fdb0967999a619

### Rust books 
* [The Rust Programming Language - The Rust Programming Language](https://doc.rust-lang.org/book/)
* [Rust 程序设计语言 - Rust 程序设计语言 简体中文版](https://kaisery.github.io/trpl-zh-cn/)
  * [Rust 程序设计语言 - Rust 程序设计语言 简体中文版](http://120.78.128.153/rustbook/) Shenzhen mirror
  * [KaiserY/trpl-zh-cn: Rust 程序设计语言（第二版 & 2018 edition）](https://github.com/KaiserY/trpl-zh-cn)
  * [Rust 程序设计语言（第一版）](http://shouce.jb51.net/rust-book-chinese/)
  * [Rust 程式設計語言 - Rust 程式設計語言](https://rust-lang.tw/book-tw/)
  * [rust-tw/book-tw: Rust 程式設計語言（正體中文翻譯）](https://github.com/rust-tw/book-tw/)

### AVR Rust
* [The AVR-Rust Guidebook](https://book.avr-rust.com/)


## AVR Rust projects
* [laris/rust-embedded-study-avr](https://github.com/laris/rust-embedded-study-avr)
  > Rust Embedded programming study for AVR
* [avr-rust/avr-config: Retrieve the target CPU frequency at runtime on Rust AVR projects](https://github.com/avr-rust/avr-config)
* [avr-rust/awesome-avr-rust: A list of useful AVR libraries and cool projects, PRs welcome!](https://github.com/avr-rust/awesome-avr-rust)
* Rahix [Rahix's Blog](https://blog.rahix.de/)
  * [Rahix/avr-hal](https://github.com/Rahix/avr-hal)
    > embedded-hal abstractions for AVR microcontrollers
  * [Rahix/avr-hal-template: cargo-generate template for avr-hal projects](https://github.com/Rahix/avr-hal-template)
  * [Rahix/avr-device: Register access crate for AVR microcontrollers](https://github.com/Rahix/avr-device)
  * [Rahix/atdf2svd: Converter from Atmel's atdf format to CMSIS SVD](https://github.com/Rahix/atdf2svd)
  * [Write your own Arduino millis() in Rust](https://blog.rahix.de/005-avr-hal-millis/)
  * [Rahix -> ravedude](https://blog.rahix.de/ravedude/)
  * [avr-hal/ravedude Rahix/avr-hal](https://github.com/Rahix/avr-hal/tree/main/ravedude)
    > ravedude is a tool I created to seamlessly run Rust code on AVR microcontrollers with nothing more than the usual cargo run. This is very much inspired by the great cargo-embed tool!
* [vlisivka/rust-arduino-hello-world](https://github.com/vlisivka/rust-arduino-hello-world)
* [vlisivka/rust-arduino-blink](https://github.com/vlisivka/rust-arduino-blink)
* [vlisivka/rapt - Rust-Arduino Pin Tester](https://github.com/vlisivka/rapt)
* [Optimizing constant bitshifts on AVR](https://aykevl.nl/2021/02/avr-bitshift)
* [Debug AVR programs using simavr and avr-gdb](https://aykevl.nl/2020/06/simavr-debug)
* [avr-progmem - crates.io: Rust Package Registry](https://crates.io/crates/avr-progmem)
  * [Cryptjar/avr-progmem-rs: Progmem utility for the AVR architecture](https://github.com/Cryptjar/avr-progmem-rs)
* [rust - Getting sequence of bytes (u8) from a char - Stack Overflow](https://stackoverflow.com/questions/31015640/getting-sequence-of-bytes-u8-from-a-char)
* [linked_list_allocator — Rust memory management library // Lib.rs](https://lib.rs/crates/linked_list_allocator)
* [phil-opp/blog_os: Writing an OS in Rust](https://github.com/phil-opp/blog_os)
  * [Writing an OS in Rust](https://os.phil-opp.com/)
  * [Writing an OS in Rust (First Edition)](https://os.phil-opp.com/edition-1/)
  * [Set Up Rust | Writing an OS in Rust (First Edition)](https://os.phil-opp.com/set-up-rust/)
* [tsao-chi/avr-water-lamp8: ](https://github.com/tsao-chi/avr-water-lamp8)
  > avr water lamp 8, base on https://github.com/avr-rust/blink, simple portb gpio + delay
* https://github.com/tsao-chi/avr-button-lamp8
  > No code
* [audioXD/avrflash: ](https://github.com/audioXD/avrflash)
  > Rust avr flashing utility (Reserved)
  >
  > No code
* [q231950/avr-atmega168-rust](https://github.com/q231950/avr-atmega168-rust)
  > base on avr-hal
* [Rust on AVR: Beyond Blinking (12 May 2017)](https://gergo.erdi.hu/blog/2017-05-12-rust_on_avr__beyond_blinking/)
  * [gergoerdi/chirp8-avr: CHIP-8 implementation in Rust targeting AVR microcontrollers](https://github.com/gergoerdi/chirp8-avr)

* [kunerd/avr-blink-svd: Proof of concept: generate code for attiny2313 with the help of svd2rust](https://github.com/kunerd/avr-blink-svd)

## Forum and discussion
* [EmbDev.net ](https://embdev.net/forum/all)


# ARM arch
* [DMA on the SAMD21](https://aykevl.nl/2019/09/samd21-dma)
* [Rust on RTL8710 running FreeRTOS](https://polyfractal.com/post/rustl8710/)
  * https://www.notion.so/larisqiao/Rust-on-RTL8710-running-FreeRTOS-894a63f063e146c99541f6b4caa03a14
  * [arm - Undefined reference to objects from the core library when compiling Rust for RTL8710 - Stack Overflow](https://stackoverflow.com/questions/48462153/undefined-reference-to-objects-from-the-core-library-when-compiling-rust-for-rtl)

### AVR Rust News
* [【Rust日报】2020-08-27 在Arduino Uno上面跑 Rust 程序 - Rust语言中文社区](https://rustcc.cn/article?id=820fb196-f0fa-4de5-b6ba-b6037e377ef2)
  > Cupnfish 发表于 2020-08-27 17:48
  > 在Arduino Uno上面跑 Rust 程序
  > 
  > 很久之前，为了在 Arduino上跑 Rust，还必须安装专门经过改造支持 AVR 的 Rust 编译器 ：rust-avr 。 一个月之前，rust-avr 已经被合并到了 Rust master 分支，这意味着你在 Nightly 下就可以玩 Arduino了。
  > 
  > 并且包含了一本新书 The AVR-Rust Guidebook ： https://book.avr-rust.com/
  > 
  > rust-avr 项目官网： https://www.avr-rust.com/
  > 
  > 这篇文章就是一个教程。
  > 
  > https://dev.to/creativcoder/how-to-run-rust-on-arduino-uno-40c0
  > 
  > via https://t.me/rust_daily_news/4495

* [【Rust 日报】2021-08-29 Tangram：训练、部署和监控机器学习模型](https://rustcc.cn/article?id=4a218f6c-3c77-4aa0-84d6-90ac2bf1fc7c)
  > 长琴 发表于 2021-08-29 20:17
  > Tags：rust,日报
  > Embedded Rust 第一步：选择一块板子
  > 内容整理自 robyoung (Rob Young) 的文章：First steps with Embedded Rust: Selecting a board
  > 有这么多令人眼花缭乱的微控制器和项目，对于嵌入式经验很少的人来说应该从哪里开始？
  > 我们在开发板中想要什么？
  > 良好的架构支持
  > 良好的芯片支持
  > 活跃的社区
  > 内置调试器
  > 我们需要什么架构？
  > 拥有最完整库、最详尽指南和最大社区的架构是 ARM Cortex-M。 ARM Cortex-M 是面向微控制器应用的低功耗、低成本处理器。 查看 crates.io 上的下载量虽说不是一个完美的指标，但可以让我们了解规模上的差异。在过去的 90 天内，cortex-m 的下载量超过 250k。 RISC-V、AVR 或 Xtensa 最多有 3k 次下载，cortex-a 有大约 18k 次下载。ARM Cortex-M 独树一帜。
  > AVR：AVR 是用于嵌入式系统的 8 位微控制器系列。在 Rust 生态系统中，它们并没有得到很好的支持。直到最近，还需要使用 rustc 的一个分支来构建 AVR。 现在有几个不同的选择，awesome-avr-rust 是一个很好的起点。
  * [First steps with Embedded Rust: Selecting a board 26 August 2021](https://robyoung.digital/blog/embedded-rust-selecting-a-board/)

* [【Rust日报】 2020-08-20 Chrome 的 Rust 与 C++ 的互操作性](https://rustcc.cn/article?id=c5e6901d-c1ee-445a-b0ea-66b3d66cead5)
  > Rust on Arduino Uno
  > 这是作者使用 Rust 在 Arduino 上实践的系列博文的第一篇，如何在 Arduino Uno 上点亮小灯💡。在撰写本文时，大约一个月前，avr-rust 分支被合并了（https://github.com/rust-lang/rust/issues/44052）。 这意味着现在可以通过仅运行cargo + nightly 构建，为目标（avr-unknown-unknown）提供一个 .cargo/config.toml 来为 avr 微控制器板编译 Rust 程序。
  > 更多请看原文：https://creativcoder.dev/rust-on-arduino-uno 

* [【Rust日报】2020-07-24 Rust 编译器（nightly版）支持 AVR 了](https://rustcc.cn/article?id=cec46fa6-2de5-4d31-8a1b-85d2a2d05b24)
  > Rust 编译器（nightly版）支持 AVR 了
  > 来自Reddit的热评：
  > I Have a few Arduinos lying around... maybe I can bring them back to life with Rust
  > AVR 项目官网的简介：
  > The standard Rust nightly compiler can be used to compile crates for AVR - no compiling from source required.
  > 
  > 推荐库：https://github.com/esp-rs
  > 
  > [Read More](https://avr-rust.com/)

* [【Rust日报】2020-06-14 - 论文《 过去十年C++的演变》](https://rustcc.cn/article?id=859f1a63-ff96-4b92-b25c-e6694cf65f14)
  > AVR被合并进Rust中
  > #rust #avr
  > [Read More](https://github.com/rust-lang/rust/pull/69478)

* [【Rust日报】 2019-03-02](https://rustcc.cn/article?id=9356a7eb-c4b4-4e4d-b43c-abefaea209e9)
  > 「嵌入式Rust讨论」用什么硬件可以更容易地开始用Rust进行嵌入式开发
  > #embeded
  > 有人在Reddit发帖询问此问题，他用的是Arduino，但是使用Cpp和Rust都非常痛苦。即便使用针对Arduino的Rust版本avr也不太稳定，所以他想问问什么硬件更适合入门者？
  > 回复中有人提到，使用基于ARM Cortex-M的硬件，比如STM-32 uC更好，Rust对该硬件体系支持的更好。可以配合discovery book一书学习。 评论中也有其他建议可以看看。
  > 
  > [Reddit 讨论](https://www.reddit.com/r/rust/comments/aw8bwt/question_hardware_for_easy_start_in_embedded_rust/)
  > 
  > [discovery book](https://rust-embedded.github.io/discovery/)

* [【Rust每日新闻】 2018-12-17](https://rustcc.cn/article?id=f06ae919-2f80-4b1b-aaf9-9bfd2ab73f55)
  > 「嵌入式Rust」Rust对Arduino支持进展调查
  > #arduino
  > 因为Arduino使用的是AVR微控制器，但Rust目前还未支持AVR。但Rust嵌入式开发组已经有计划支持AVR。
  > 感兴趣的朋友可以关注此issues：
  > [AVR support](https://github.com/rust-embedded/wg/issues/3)
  > 目前也有一个avr-project GitHub项目组独立fork了Rust，提供了对AVR的支持。在官方Rust未支持AVR之前，可以使用这个，看上去还非常活跃。
  > [avr-rust](https://github.com/avr-rust)
