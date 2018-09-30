import React, { Component } from 'react';
import GuestList from './GuestList';
import Counter from './Counter';

import './App.css';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Nic",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Guil",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Andrew",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Dave",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Alena",
        isConfirmed: false,
        isEditing: true
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
    this.setState(
      (prevState)=>{
        guests: [
          ...prevState.guests.slice(0, index),
          ...prevState.guests.slice(index+1)
        ]
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
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input
              onChange={this.handleNameInput}
              value={this.state.pendingGuest}
              type="text" defaultValue="" placeholder="Invite Someone" />
            <button 
              onClick={this.newGuestSubmitHandler}
              type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
          </label>
          </div>
          <Counter 
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
             />
          <GuestList guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered} 
            removeGuestAt={this.removeGuestAt} 
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
