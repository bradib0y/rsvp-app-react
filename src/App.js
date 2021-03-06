import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';


class App extends Component {

  state = {
    lastId: 6,
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false,
        id: 1
      },
      {
        name: "Nic",
        isConfirmed: false,
        isEditing: false,
        id: 2
      },
      {
        name: "Guil",
        isConfirmed: true,
        isEditing: false,
        id: 3
      },
      {
        name: "Andrew",
        isConfirmed: true,
        isEditing: false,
        id: 4
      },
      {
        name: "Dave",
        isConfirmed: false,
        isEditing: false,
        id: 5
      },
      {
        name: "Alena",
        isConfirmed: false,
        isEditing: false,
        id: 6
      }
    ],
  };

  toggleFilter = () =>
    this.setState(
      (prevState) => {
        return (
          {
            isFiltered: !prevState.isFiltered
          }
        );
      }
    );

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState(
      (prevState) => {
        return {
          guests: [
            {
              name: prevState.pendingGuest,
              isConfirmed: false,
              isEditing: false,
              id: prevState.lastId + 1
            },
            ...prevState.guests
          ],
          pendingGuest: "",
          lastId: prevState.lastId + 1
        };
      }
    );
  };

  toggleGuestPropertyAt = (propertyToChange, idToChange) =>
    this.setState((prevState) => {
      return {
        guests: prevState.guests.map((guest, index) => {

          if (guest.id === idToChange) {
            return {
              ...guest,
              [propertyToChange]: !guest[propertyToChange]
            };
          }

          return guest;

        } // map function callback function
        ) // map function call
      } // object returned by setState parameter callback function
    } // setState parameter callback function
    );

  toggleConfirmation = id => this.toggleGuestPropertyAt("isConfirmed", id);
  toggleEditingForId = id => this.toggleGuestPropertyAt("isEditing", id);

  setNameForId = (text, idToChange) =>
    this.setState((prevState) => {
      return {
        guests: prevState.guests.map((guest, index) => {

          if (guest.id === idToChange) {
            return {
              ...guest,
              name: text
            };
          }

          return guest;

        } // map function callback function
        ) // map function call
      }; // object returned by setState parameter callback function
    } // setState parameter callback function
    );

  removeGuestById = idToRemove =>
    this.setState(
      (prevState) => {
        return {
          guests: prevState.guests.filter((guest) => guest.id != idToRemove)
        };
      }
    );

  getTotalInvited = () => this.state.guests.length;
  getTotalConfirmed = () => this.state.guests.filter((guest) => guest.isConfirmed).length;

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getTotalConfirmed();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
          newGuestSubmitHandler={this.newGuestSubmitHandler}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditingForId={this.toggleEditingForId}
          setNameForId={this.setNameForId}
          isFiltered={this.state.isFiltered}
          removeGuestById={this.removeGuestById}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
