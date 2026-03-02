import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateAsc = [... (data?.focus || [])].sort(
    (evtA, evtB) => new Date(evtA.date) - new Date(evtB.date)
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev < byDateAsc.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearTimeout(timer);
  }, [index, byDateAsc.length]);
  
    return (
    <div className="SlideCardList">
      {byDateAsc.map((event, idx) => (
        <div key={event.title}>
          <div
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>

          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateAsc.map((radioEvent) => (
                <input
                  key={`${radioEvent.title}-${radioEvent.date}`}
                  type="radio"
                  name="radio-button"
                  checked={index === byDateAsc.indexOf(radioEvent)}
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
