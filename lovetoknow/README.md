First step:
  - Create React App with Router.

Second step: 
  - Create DIR structure
  - Create HomePage, ResultsPage
  - Create API connection
  - Create first versions of the components.  

Three Steps:
  - Added Styled Components
  - ResultsPage added fallback without searching.  

Fourth Step:
  - Card Component
  - Styled Components
  - Tests. I don't have so much experience testing with React Router and it difficults very much someparts to test.

Note: There's something strange, the api what you ask to use it only return One movie doesn't matter what, so it's very strange to develop an Slider for an unique item.

To put the info inside Slider and develop the interaction I was gonna use:

Total hours: 2.5 hours.
  - 1 hour: All logic, components.
  - 1.5 hour: Testing, styling.


```JavaScript
  // generate data for the slider
           {results ? Object.keys(results).map(key => (
            <Card key={key}
              poster={results['Poster']} 
              director={results['Director']}
              year={results['Year']}
              title={results['Title']} 
            />
           )) : <ErrorMessage/>}
```
Slider: 
React stateless Component with an overflow-x
If is needed something more fancy I was gonna use: https://github.com/akiran/react-slick
An slider isn't a easy task and maybe will cost so much effort to develop alone for the test.
Apart I don't have any spec from UIX, so I don't know what interaction we need.