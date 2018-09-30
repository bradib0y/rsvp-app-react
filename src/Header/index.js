import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) =>
    <header>
        <div class="typewriter">
            <h1>code pilots</h1>
        </div>
        <p>conference of grandmasters</p>
        <form>
            <input
                onChange={props.handleNameInput}
                value={props.pendingGuest}
                type="text" defaultValue="" placeholder="Invite Someone" />
            <button
                onClick={props.newGuestSubmitHandler}
                type="submit" name="submit" value="submit">Submit</button>
        </form>
    </header>
    ;

Header.PropTypes = {
    handleNameInput: PropTypes.func.isRequired,
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default Header;