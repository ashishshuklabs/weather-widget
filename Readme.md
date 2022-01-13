# Basic Weather Widget

Tech Stack: TypeScript, React, Styled Components

Features:
Responsive upto 500px screen size. Used responsive units as much as possible. 
Uses custom hooks for input debouncing and api calls
Custom radio button styles
APIs consumed: geolocation, OpenWeather -> onecall (for fetching data based on coordinates), reverse (for reverse geocoding and returning location based on browser navigator).
Contains form element accepting 3 user inputs and updates rendered details on the weather card accordingly.

Room for improvement(didn't have much time):
Change layout--> column stack on smaller screen sizes
Title, weather detail truncation on longer text.
Adjust Form and Card sizes responsively.
Add a little bit animation on radio button checked state
API call error handling could be improved

Assumptions:
Wind on/off radio buttons show/hide wind stats (on by default) on the weather card
Temperature radio buttons display temperature in degree Celcius/Fahrenheit (Fahrenheit by default)
As user types into the title field, the card title updates accordingly. Debounced the input value here as there is no way to tell when the user has finished typing.

Overall, its a pretty interesting app and I enjoyed working on it. A small widget but many things to work with and build on.

### For running locally
yarn dev
