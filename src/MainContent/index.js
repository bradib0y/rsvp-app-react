import React, { Component } from 'react';
import Counter from './Counter';
import GuestList from './GuestList';
import PropTypes from 'prop-types';

const MainContent = (props) =>
    <div className="main">
        <div className="dashboard">
            <div>
                <h2>Invitees</h2>
                <label className="customCheckboxContainer">Hide those who haven't responded
                    <input type="checkbox" checked={props.isFiltered} onChange={props.toggleFilter} />
                    <span className="checkmark"></span>
                </label>
            </div>
            <Counter
                totalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed}
            />
        </div>
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
