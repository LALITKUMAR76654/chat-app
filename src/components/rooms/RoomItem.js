import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TimeAgo from 'timeago-react';
import ProfieAvatar from '../ProfileAvatar';

const RoomItem = ({ room }) => {
  const { createdAt, name, lastMessage } = room;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">{name}</h3>
        <TimeAgo
          datetime={
            lastMessage ? new Date(lastMessage.createdAt) : new Date(createdAt)
          }
          className="font-normal text-black-45"
        />
      </div>

      <div className="d-flex align-items-center text-black-70">
        {lastMessage ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            <div className="d-flex align-items-center">
              <ProfieAvatar
                src={lastMessage.author.avatar}
                name={lastMessage.author.name}
                size="sm"
              />
            </div>

            <div className="text-disappear ml-2">
              <div className="italic">{lastMessage.author.name}</div>

              <span>{lastMessage.text}</span>
            </div>
          </>
        ) : (
          <span>No messages yet...</span>
        )}
      </div>
    </div>
  );
};

export default RoomItem;
