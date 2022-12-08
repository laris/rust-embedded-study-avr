## TLSF memory allocator
* [TLSF | <none>](http://www.gii.upv.es/tlsf/)
* [One malloc to rule them all | Hacker News](https://news.ycombinator.com/item?id=603372)
* [具有O(1)时间复杂度的tlsf内存管理算法分享 - 编程语言 - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.rtosfans.com/forum.php?mod=viewthread&tid=111021&highlight=TLSF)
  > 刚刚测试了下，具体的参数如下：
  > tlsf句柄大小:  3188B=3.11KB(可能是因为利用位图查找，所以用这么多内存）
  > tlsf内存池的头部大小：8B
  > tlsf每个内存块的头部大小：4B
  > Mem_Manage句柄大小：24B
  > Mem_Manage每个内存块的头部大小：8B
* [我来分享一下 tlsf v2.4.4 / v2.4.6 malloc 动态内存管理 , 据说是比较 牛逼的 - uCOS & uCGUI & emWin & embOS & TouchGFX & ThreadX - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.rtosfans.com/forum.php?mod=viewthread&tid=108293&highlight=TLSF)
  * [论坛首发，内存管理算法，支持malloc,realloc,align_alloc，配有内存碎片合并算法 - 编程语言 - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.armbbs.cn/forum.php?mod=viewthread&tid=108321&highlight=%CA%D7%B7%A2)
  * [分享一个 修改 ti 的动态内存管理 malloc,欢迎使用评测 - STM32H7 - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.armbbs.cn/forum.php?mod=viewthread&tid=105867&extra=)
  * [发一个 移植 threadx os 系统里面的内存管理 malloc ，大家伙看看有没有什么更好的建议 ？ - uCOS & uCGUI & emWin & embOS & TouchGFX & ThreadX - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.armbbs.cn/forum.php?mod=viewthread&tid=101005&extra=)
* [分享一个实时系统动态内存算法TLSF - uCOS & uCGUI & emWin & embOS & TouchGFX & ThreadX - 硬汉嵌入式论坛 - Powered by Discuz!](https://www.rtosfans.com/forum.php?mod=viewthread&tid=91606&highlight=TLSF)

* [我来发点技术资料——TLSF内存分配算法，适合RTOS使用 (amobbs.com 阿莫电子论坛)](https://www.amobbs.com/forum.php?mod=viewthread&tid=5544900)

* [LiteOS内存管理：TLSF算法 - 简书](https://www.jianshu.com/p/01743e834432)
  * [Dynamic Memory Allocate(动态内存分配)_Snail_Walker的博客-CSDN博客](https://blog.csdn.net/c602273091/article/details/53576494)
  * https://pdfs.semanticscholar.org/31da/f60a6c47c1bf892a2c4b76e4bb7c1cf83b58.pdf
* [rmind/tlsf: TLSF: two-level segregated fit O(1) allocator](https://github.com/rmind/tlsf)
* [mattconte/tlsf: Two-Level Segregated Fit memory allocator implementation.](https://github.com/mattconte/tlsf)

* [2004 (PDF) TLSF: A new dynamic memory allocator for real-time systems](https://www.researchgate.net/publication/4080369_TLSF_A_new_dynamic_memory_allocator_for_real-time_systems)

* [2018 Heapless: Dynamic Data Structures without Dynamic Heap Allocator for Rust | Request PDF](https://www.researchgate.net/publication/345599409_Heapless_Dynamic_Data_Structures_without_Dynamic_Heap_Allocator_for_Rust)

* [rlsf - crates.io: Rust Package Registry](https://crates.io/crates/rlsf)

* [rlsf - Rust](https://docs.rs/rlsf/0.1.2/rlsf/)

* [xalloc - crates.io: Rust Package Registry](https://crates.io/crates/xalloc)

* [github.com/yvt/xalloc-rs](https://crates.io/crates/xalloc)

* [PTaylor-us/tlsf: A Two Level Segregated Fit (TLSF) allocator optimized for memory-constrained systems](https://github.com/PTaylor-us/tlsf)

* [dy_tlsf - crates.io: Rust Package Registry](https://crates.io/crates/dy_tlsf)

* [Github Repositories Trend](https://github.oldjpg.com/)


* [dropbox/rust-alloc-no-stdlib: An interface to a generic allocator so a no_std rust library can allocate memory, with, or without stdlib being linked.](https://github.com/dropbox/rust-alloc-no-stdlib)

* [Rust manual memory management - Stack Overflow](https://stackoverflow.com/questions/48485454/rust-manual-memory-management)
  * [Rust Tidbits: Box Is Special - In Pursuit of Laziness](https://manishearth.github.io/blog/2017/01/10/rust-tidbits-box-is-special/)

* [ATOMIC_BLOCK magic in avr-libc · The Odd Bit](http://blog.oddbit.com/post/2019-02-01-atomicblock-magic-in-avrlibc/)
* [Question - What is 'Atomic Instruction' ? | AVR Freaks](https://www.avrfreaks.net/forum/question-what-atomic-instruction)


  