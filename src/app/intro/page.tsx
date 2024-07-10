"use client"

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs } from 'react-icons/si'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'React', icon: <SiReact />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 75 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 70 },
    { name: 'Node.js', icon: <SiNodedotjs />, level: 65 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>山田太郎 - ウェブデベロッパー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md transition-colors duration-300"
          >
            {darkMode ? '🌞 ライトモード' : '🌙 ダークモード'}
          </button>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          山田太郎 - ウェブデベロッパー
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自己紹介</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            フロントエンド開発に特化したウェブデベロッパーです。最新のJavaScript技術を駆使して、
            パフォーマンスとユーザー体験に優れたウェブアプリケーションを構築することが得意です。
            React、Next.js、Tailwind CSSなどのモダンな技術スタックを活用し、
            スケーラブルで保守性の高いコードを書くことを心がけています。<br/>
            <span className='text-xs'>※このページは自動生成ツールで生成されたコードをそのまま使用しました。</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">技術スキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="text-2xl mr-2 text-gray-700 dark:text-gray-300">{skill.icon}</div>
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300">{skill.name}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">お問い合わせ</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  )
}