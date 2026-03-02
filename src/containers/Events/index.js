import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();

  // Selected category (example: "Conférence")
  const [type, setType] = useState(null);

  // Current pagination page
  const [currentPage, setCurrentPage] = useState(1);

  // All events (empty array if data is not loaded yet)
  const allEvents = data?.events || [];

  // Filter events by selected category
  // If no category is selected, show all events
  const eventsByType = type
    ? allEvents.filter((event) => event.type === type)
    : allEvents;

  // Pagination logic
  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = currentPage * PER_PAGE;

  // Events displayed on the current page
  const filteredEvents = eventsByType.slice(startIndex, endIndex);

  // Calculate total number of pages based on filtered events
  const pageNumber = Math.ceil(eventsByType.length / PER_PAGE);

  // Create unique list of categories for the Select component
  const typeList = Array.from(
    new Set(allEvents.map((event) => event.type))
  );

  // When category changes:
  // - reset to page 1
  // - update selected category
  const changeType = (newType) => {
    setCurrentPage(1);
    setType(newType);
  };

  return (
    <>
      {error && <div>An error occured</div>}

      {data === null ? (
        "loading"
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>

          <Select
            selection={typeList}
            onChange={(value) =>
              value ? changeType(value) : changeType(null)
            }
          />

          <div id="events" className="ListContainer">
            {filteredEvents.map((event) => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>

          <div className="Pagination">
            {[...Array(pageNumber)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;