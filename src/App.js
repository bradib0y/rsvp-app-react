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
              isEditing: false
            },
            ...prevState.guests
          ],
          pendingGuest: ""
        };
      }
    );
  };

  toggleGuestPropertyAt = (propertyToChange, indexToChange) =>
    this.setState((prevState) => {
      return {
        guests: prevState.guests.map((guest, index) => {

          if (index === indexToChange) {
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

  toggleConfirmationAt = index => this.toggleGuestPropertyAt("isConfirmed", index);
  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (text, indexToChange) =>
    this.setState((prevState) => {
      return {
        guests: prevState.guests.map((guest, index) => {

          if (index === indexToChange) {
            return {
              ...guest,
              name: text
            };
          }

          return guest;

        } // map function callback function
        ) // map function call
      } // object returned by setState parameter callback function
    } // setState parameter callback function
    );

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

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
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
