import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';


const GuestList = props =>
    <ul>
        <PendingGuest name={props.pendingGuest} />
        {props.guests
            .filter(guest => props.isFiltered ? guest.isConfirmed : true)
            .map((guest, index) =>
                <Guest
                    key={index}
                    name={guest.name}
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => props.toggleConfirmation(guest.id)}
                    handleToggleEditing={() => props.toggleEditingForId(guest.id)}
                    setName={(text) => props.setNameForId(text, guest.id)}
                    handleRemove={() => props.removeGuestAt(index)}
                />
            )}
    </ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditingForId: PropTypes.func.isRequired,
    editGuestNameAt: PropTypes.func.isRequired,
    setNameForId: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default GuestList;