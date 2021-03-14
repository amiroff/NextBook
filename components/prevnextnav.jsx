import { ArrowLeft, ArrowRight } from 'components/svgicons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useShortcuts } from 'react-shortcuts-hook'
import config from '../config.json'
import { _ } from './text'

function PrevNextNav() {
  const router = useRouter()
  const { toc } = config

  // isolate current part array
  const currentPart = toc.find((part) =>
    part.chapters.some((chapter) => chapter.path === router.pathname)
  )
  const currentPartIndex = toc.indexOf(currentPart)

  // find previous and next parts even if they do not exist
  const prevPart = toc[currentPartIndex - 1]
  const nextPart = toc[currentPartIndex + 1]

  // find index of current title
  const currentChapterIndex = currentPart?.chapters.findIndex(
    (chapter) => chapter.path === router.pathname
  )

  // find previous page, iff not, use last page of previous part
  let prevChapter =
    currentPart?.chapters[currentChapterIndex - 1] ||
    prevPart?.chapters[prevPart?.chapters.length - 1]
  // find next page, if not, use first page of next part
  let nextChapter = currentPart?.chapters[currentChapterIndex + 1] || nextPart?.chapters[0]

  useShortcuts(['shift', 'ArrowRight'], () => nextChapter && router.push(nextChapter.path))
  useShortcuts(['shift', 'ArrowLeft'], () => prevChapter && router.push(prevChapter.path))

  return (
    <>
      <div className='my-20 d-flex'>
        {prevChapter && (
          <Link href={prevChapter.path}>
            <a className='prev-page d-flex justify-content-between align-items-center'>
              <div>
                <ArrowLeft />
              </div>
              <div className='text-right'>
                <span className='hidden-md-and-up text-capitalize'>{_('Previous chapter')}</span>
                <div className='hidden-sm-and-down'>{prevChapter.title}</div>
                <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                  <kbd>shift</kbd> + <kbd>←</kbd>
                </div>
              </div>
            </a>
          </Link>
        )}

        {nextChapter && (
          <Link href={nextChapter.path}>
            <a className='prev-page d-flex justify-content-between align-items-center'>
              <div className='text-left'>
                <span className='hidden-md-and-up text-capitalize'>{_('Next chapter')}</span>
                <div className='hidden-sm-and-down'>{nextChapter.title}</div>
                <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
                  <kbd>shift</kbd> + <kbd>→</kbd>
                </div>
              </div>
              <div>
                <ArrowRight />
              </div>
            </a>
          </Link>
        )}
      </div>
    </>
  )
}

export default PrevNextNav
