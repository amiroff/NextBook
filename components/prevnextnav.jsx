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
      <div className='row my-20 d-flex justify-content-between'>
        {prevChapter ? (
          <Link href={prevChapter.path}>
            <a title={_('Previous chapter')} className='font-size-16 prev-page'>
              ❮ {prevChapter.title}
              <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                <kbd>shift</kbd> + <kbd>❮</kbd>
              </div>
            </a>
          </Link>
        ) : (
          <div className='col-5'></div>
        )}

        {nextChapter && (
          <Link href={nextChapter.path}>
            <a className='font-size-16 next-page text-right' title={_('Next chapter')}>
              {nextChapter.title} ❯
              <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                <kbd>shift</kbd> + <kbd>❯</kbd>
              </div>
            </a>
          </Link>
        )}
      </div>
    </>
  )
}

export default PrevNextNav
