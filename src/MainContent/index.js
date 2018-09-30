import React, { Component } from 'react';
import Counter from './Counter';
import GuestList from './GuestList';
import PropTypes from 'prop-types';

const MainContent = (props) =>
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
                <input
                    type="checkbox"
                    onChange={props.toggleFilter}
                    checked={props.isFiltered}
                /> Hide those who haven't responded
            </label>
        </div>
        <Counter
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed={props.numberUnconfirmed}
        />
        <GuestList guests={props.guests}
            toggleConfirmation={props.toggleConfirmation}
            toggleEditingForId={props.toggleEditingForId}
            setNameForId={props.setNameForId}
            isFiltered={props.isFiltered}
            removeGuestById={props.removeGuestById}
            pendingGuest={props.pendingGuest}
        />
    </div>
    ;

MainContent.PropTypes = {
    toggleFilter: PropTypes.bool.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditingForId: PropTypes.func.isRequired,
    setNameForId: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestById: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default MainContent;
