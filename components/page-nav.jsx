import { ArrowLeft, ArrowRight } from 'components/svg-icons'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useShortcuts } from 'react-shortcuts-hook'
import { _ } from './text'

export default function PageNav() {
  const router = useRouter()
  const { toc } = config
  const { asPath } = router

  // isolate current part array
  const currentPart = toc.find((part) =>
    part.chapters.some((chapter) => chapter.path === asPath)
  )
  const currentPartIndex = toc.indexOf(currentPart)

  // find previous and next parts even if they do not exist
  const prevPart = toc[currentPartIndex - 1]
  const nextPart = toc[currentPartIndex + 1]

  // find index of current title
  const currentChapterIndex = currentPart?.chapters.findIndex(
    (chapter) => chapter.path === asPath
  )

  // find previous page, iff not, use last page of previous part
  let prevChapter =
    currentPart?.chapters[currentChapterIndex - 1] ||
    prevPart?.chapters[prevPart?.chapters.length - 1]
  // find next page, if not, use first page of next part
  let nextChapter =
    currentPart?.chapters[currentChapterIndex + 1] || nextPart?.chapters[0]

  useShortcuts(
    ['ArrowRight'],
    () => nextChapter && router.push(nextChapter.path),
    [asPath]
  )
  useShortcuts(
    ['ArrowLeft'],
    () => prevChapter && router.push(prevChapter.path),
    [asPath]
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
              className={`border border-transparent flex w-full justify-center md:justify-between rounded m-1 p-3 bg-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:text-gray-100 ${
                !nextChapter && 'w-full md:max-w-sm'
              }`}
              title={_('Previous chapter')}
            >
              <ArrowLeft />
              <div className='ml-2'>{prevChapter.title}</div>
            </a>
          </Link>
        )}

        {nextChapter && (
          <Link href={nextChapter.path}>
            <a
              className={`border border-transparent flex w-full justify-center md:justify-between rounded m-1 p-3 bg-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:text-gray-100 ${
                !prevChapter && 'w-full md:max-w-sm'
              }`}
              title={_('Next chapter')}
            >
              <div className='mr-2'>{nextChapter.title}</div>
              <ArrowRight />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
