import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Japanese, English } from "../types/Language";

export default function Home() {
  const tmp = ["天気", "Weather"];
  // console.log(tmp[langMode]);
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-hull p-1">
        <div className="h-52 bg-slate-900 shadow shadow-slate-900 rounded dark:border-2 border-slate-500 text-white pr-3 flex justify-between items-center">
          <div className="w-1/4 h-full from-cyan-800 bg-gradient-to-br bg-cyan-600 dark:from-indigo-900 dark:bg-indigo-600 rounded-l dark:rounded-l-sm mr-10 px-3 flex flex-col py-3 space-y-3">
            {/* 自身のIPアドレス */}
            <div className="w-full py-2 font-bold italic flex items-center justify-center rounded mr-1 border">
              <div>
                <p className="text-lg">Connected</p>
                <p className="text-2xl">192.168.1.10</p>
              </div>
            </div>

            {/* コントローラー */}
            <div className="w-full h-full flex justify-center items-center space-x-2">
              <button className="w-full h-full border rounded"></button>
              <button className="w-full h-full border rounded flex justify-center items-center">
                <div>
                  <p className="text-xs">Settings</p>
                </div>
              </button>
            </div>
          </div>
          {/* <div className="w-24 h-full mx-3 bg-green-700"></div> */}
          <div className="flex-grow h-full flex items-center justify-start">
            <div className="w-full">
              <div className="flex justify-between items-center text">
                <p>2022年12月12日 - 月</p>
                <p>2℃</p>
              </div>
              <div className="w-full flex items-center space-x-5 mt-3">
                {/* <div className="w-24 h-24 border-4 border-red-500 outline outline-2 outline-white rounded bg-white text-slate-700">
                <div>
                  <p className="text-center font-bold text-xl">TQ</p>
                  <p className="text-center text-6xl font-bold">24</p>
                </div>
              </div> */}
                <div className="flex-grow">
                  <p className="title font-bold">12:34</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ページの中身 */}
      <div className="mx-1 my-3 px-4 h-full">
        <div className="w-full h-full text-4xl">
          <div className="w-full flex items-center justify-between">
            <h1 className="font-bold text-6xl">アクティビティ</h1>
            <h4 className="font-bold text-xl">Powered by Strava-API</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
