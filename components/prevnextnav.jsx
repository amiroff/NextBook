import Link from 'next/link'
import config from '../config.json'
import { useRouter } from 'next/router'
import { useShortcuts } from 'react-shortcuts-hook'
import { _ } from './text'

function PrevNextNav() {
  const router = useRouter()
  const { toc } = config

  // isolate current chapter array
  const currentPart = toc.find((part) =>
    part.chapters.some((chapter) => chapter.path === router.pathname)
  )
  // find index of current title
  const currentChapterIndex = currentPart?.chapters.findIndex(
    (chapter) => chapter.path === router.pathname
  )
  // find previous and next pages
  const prevChapter = currentPart?.chapters[currentChapterIndex - 1]
  const nextChapter = currentPart?.chapters[currentChapterIndex + 1]
  // TODO: implement part switching

  useShortcuts(['shift', 'ArrowRight'], () => nextChapter && router.push(nextChapter.path))
  useShortcuts(['shift', 'ArrowLeft'], () => prevChapter && router.push(prevChapter.path))

  return (
    <>
      <div className='row my-20'>
        <div className='text-left font-size-16 col-6'>
          {prevChapter && (
            <>
              <Link href={prevChapter.path}>
                <a className='hyperlink pt-0 d-block' title={_('Previous chapter')}>
                  ❮ {prevChapter.title}
                </a>
              </Link>
              <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>❮</kbd>
              </div>
            </>
          )}
        </div>
        <div className='text-right font-size-16 col-6'>
          {nextChapter && (
            <>
              <Link href={nextChapter.path}>
                <a className='hyperlink pt-0 d-block' title={_('Next chapter')}>
                  {nextChapter.title} ❯
                </a>
              </Link>
              <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>❯</kbd>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PrevNextNav
