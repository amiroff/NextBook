import Link from 'next/link'
import config from '../config.json'
import { useRouter } from 'next/router'
import { useShortcuts } from 'react-shortcuts-hook'
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
