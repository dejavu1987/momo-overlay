import content from './outline';
import { useParams } from 'react-router-dom';

export default function Control({ onModify }) {
  const { topic } = useParams();
  const subject = content[topic] || content.react;
  const showPages = (section, topic, chapter, sectionTitle) => {
    return (
      section.pages && (
        <ol>
          {section.pages?.map((page) => {
            return (
              <li
                onClick={() =>
                  onModify({
                    topic,
                    chapter,
                    section: sectionTitle,
                    page: page,
                  })
                }
              >
                {page.title}
              </li>
            );
          })}
        </ol>
      )
    );
  };

  return (
    <div className="control">
      <h1 className="">{subject.topic}</h1>
      <ol>
        {subject.chapters.map((chapter) => {
          return (
            <li>
              <span
                onClick={() =>
                  onModify({
                    topic: subject.topic,
                    chapter: chapter.chapter,
                  })
                }
              >
                {chapter.chapter}
              </span>
              {showPages(chapter, subject.topic, chapter.chapter, null)}
              {chapter.sections && (
                <ol>
                  {chapter.sections?.map((section) => {
                    return (
                      <li>
                        <span
                          onClick={() =>
                            onModify({
                              topic: subject.topic,
                              chapter: chapter.chapter,
                              section: section.title,
                            })
                          }
                        >
                          {section.title}
                        </span>
                        {showPages(
                          section,
                          subject.topic,
                          chapter.chapter,
                          section.title
                        )}
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
