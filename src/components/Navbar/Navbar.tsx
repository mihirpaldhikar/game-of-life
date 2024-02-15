/*
 * Copyright (c) Mihir Paldhikar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { JSX } from "react";
import { GitHub } from "@components/Icons";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <nav
      className={
        "fixed w-full border-b border-gray-300 backdrop-blur justify-between bg-white/50 px-5 py-3 h-16 flex items-center md:px-10 md:py-5"
      }
    >
      <div className={"flex items-center space-x-2"}>
        <h1 className={"font-bold text-xl"}>Game Of Life</h1>
        <div
          className={
            "text-white bg-red-500 rounded-md px-2 flex items-center justify-center py-1"
          }
        >
          <span className={"text-xs"}>Alpha</span>
        </div>
      </div>
      <div>
        <Link
          href={"https://github.com/mihirpaldhikar/game-of-life"}
          target={"_blank"}
          className={
            "flex items-center justify-center space-x-2 cursor-pointer border border-black px-2 py-1 rounded-md"
          }
        >
          <GitHub />
          <span>GitHub</span>
        </Link>
      </div>
    </nav>
  );
}
