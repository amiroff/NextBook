import { ArrowLeft, ArrowRight } from 'components/svg-icons'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useShortcuts } from 'react-shortcuts-hook'
import { _ } from './text'

export default function PageNav() {
  const router = useRouter()
  const { toc } = config
  const { slug } = router.query

  // isolate current part array
  const currentPart = toc.find((part) =>
    part.chapters.some((chapter) => chapter.path === slug)
  )
  const currentPartIndex = toc.indexOf(currentPart)

  // find previous and next parts even if they do not exist
  const prevPart = toc[currentPartIndex - 1]
  const nextPart = toc[currentPartIndex + 1]

  // find index of current title
  const currentChapterIndex = currentPart?.chapters.findIndex(
    (chapter) => chapter.path === slug
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
    [slug]
  )
  useShortcuts(
    ['ArrowLeft'],
    () => prevChapter && router.push(prevChapter.path),
    [slug]
  )

  return (
    <>
      <div className='mb-20 d-flex page-nav'>
        {prevChapter && (
          <Link href={prevChapter.path}>
            <a className='prev-page mr-10 d-flex hidden-xs-and-down justify-content-between align-items-center'>
              <div>
                <ArrowLeft />
              </div>
              <div className='text-right'>
                <div>{prevChapter.title}</div>
              </div>
            </a>
          </Link>
        )}

        {nextChapter && (
          <Link href={nextChapter.path}>
            <a className='next-page d-flex justify-content-between align-items-center'>
              <div className='text-left'>
                <span className='hidden-sm-and-up text-capitalize'>
                  <span className='text-muted'>{_('Next chapter')}:</span>{' '}
                  <br /> {nextChapter.title}
                </span>
                <div className='hidden-xs-and-down'>{nextChapter.title}</div>
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
