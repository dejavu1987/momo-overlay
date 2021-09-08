import content from "./outline-ReactJs";

export default function Control({ onModify }) {
  const subject = content[0];
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
                    chapter: chapter.chapter
                  })
                }
              >
                {chapter.chapter}
              </span>
              {chapter.sections && (
                <ol>
                  {chapter.sections?.map((section) => {
                    return (
                      <li
                        onClick={() =>
                          onModify({
                            topic: subject.topic,
                            chapter: chapter.chapter,
                            section
                          })
                        }
                      >
                        {section}
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
