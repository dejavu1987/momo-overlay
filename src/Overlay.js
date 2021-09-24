import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export default function Overlay({ data: { topic, chapter, section, page } }) {
  const [switching, setSwitching] = useState(true);
  const timeout = useRef(() => {});
  useEffect(() => {
    setSwitching(true);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (!page) {
      timeout.current = setTimeout(() => {
        setSwitching(false);
      }, 5000);
    }
  }, [topic, chapter, section, page]);
  return (
    <div className={classNames('overlay', switching && 'switching')}>
      <div className={classNames('overlay__heads', page ? 'page-mode' : null)}>
        <h1>{topic}</h1>
        <h2>{chapter}</h2>
        <h3>{section}</h3>
      </div>
      {page && (
        <div className="overlay__page">
          <h2>{page.title}</h2>
          <div
            className="overlay__page__content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>
        </div>
      )}

      {/* <button
        className="toggle"
        onClick={() => {
          setSwitching(!switching);
        }}
      >
        ToggleView
      </button> */}
    </div>
  );
}
