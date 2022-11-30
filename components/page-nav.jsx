import { ArrowLeft, ArrowRight } from 'components/svg-icons'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import { _ } from './text'

export default function PageNav() {
  const { toc } = config
  const router = useRouter()
  const [prevChapter, setPrevChapter] = useState('')
  const [nextChapter, setNextChapter] = useState('')

  useEffect(() => {
    
    // isolate current part array
    const currentPart = toc.find((part) =>
      part.chapters.some((chapter) => chapter.path === router.asPath)
    )
    const currentPartIndex = toc.indexOf(currentPart)

    // find previous and next parts even if they do not exist
    const prevPart = toc[currentPartIndex - 1]
    const nextPart = toc[currentPartIndex + 1]

    // find index of current title
    const currentChapterIndex = currentPart?.chapters.findIndex(
      (chapter) => chapter.path === router.asPath
    )
    

    // find previous page, if not, use last page of previous part
    setPrevChapter(
      currentPart?.chapters[currentChapterIndex - 1] ||
      prevPart?.chapters[prevPart?.chapters.length - 1]
    )
    // find next page, if not, use first page of next part
    setNextChapter(
      currentPart?.chapters[currentChapterIndex + 1] || nextPart?.chapters[0]
    )
  }, []) //router.asPath, toc

  useShortcuts(
    ['ArrowRight'],
    () => nextChapter && router.push(nextChapter.path),
    [router.asPath]
  )
  useShortcuts(
    ['ArrowLeft'],
    () => prevChapter && router.push(prevChapter.path),
    [router.asPath]
  )

  return (
    <div className='my-2 no-print'>
      <div
        className={`flex flex-col-reverse sm:flex-row ${
          !prevChapter && 'justify-end'
        }`}
      >
        {prevChapter && (
          <Link href={prevChapter.path}>
            <a
              className={`border border-transparent flex md:w-1/2 justify-center md:justify-between rounded m-1 p-3 bg-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:text-gray-100 ${
                !nextChapter && 'md:w-full md:max-w-sm'
              }`}
              title={_('Previous chapter')}
            >
              <div className='w-4'>
                <ArrowLeft />
              </div>
              <div className='ml-2 truncate'>{prevChapter.title}</div>
            </a>
          </Link>
        )}

        {nextChapter && (
          <Link href={nextChapter.path}>
            <a
              className={`border border-transparent flex md:w-1/2 justify-center md:justify-between rounded m-1 p-3 bg-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:text-gray-100 ${
                !prevChapter && 'md:w-full md:max-w-sm'
              }`}
              title={_('Next chapter')}
            >
              <div className='mr-2 truncate'>{nextChapter.title}</div>
              <div className='w-4'>
                <ArrowRight />
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
