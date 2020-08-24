# React Native: Useful Walkthrough Tips

## Walkthrough using tooltips

- ### Example

  ![Alt Text](https://raw.githubusercontent.com/xtech-guru/walkthrough-review/master/assets/img01.gif)

- ### Installation

  To create a walkthrough in our app, we need to add this package `react-native-walkthrough` to our project.

- ### Steps

  - First of all, we need to wrap our entire app with `WalkthroughProvider` component as below:

    ```bash
     import { WalkthroughProvider } from 'react-native-walkthrough';

     const App = function() {
         return (
             <WalkthroughProvider>
                 <YourAppHere />
             </WalkthroughProvider>
         )
     }
    ```

  - Then to highlight a view as a part of a Walkthrough, you need simply wrap the component in a `WalkthroughElement` and give it a unique id:

    ```bash
    import { WalkthroughElement } from 'react-native-walkthrough';

    const element = function(){
        return (
            <WalkthroughElement id="foo">   // don't forget to pass the unique id
                <Button title="Click me" onPress={() => {}}/>
            </WalkthroughElement>
        )
    }
    ```

  - To start the walkthrough, we need just to execute `startWalkthrough` function with passing an array of objects as the following:

    ```bash
    import { startWalkthrough } from 'react-native-walkthrough';

    import walkthrough from './walkthrough'; //walkthrough should be an array of objects

    <Button title="Click me" onPress={() => startWalkthrough(walkthrough)}/>
    ```

- ### Guide values (necessary properties)

  | Key       |       Type       | Required | Description                                                               |
  | --------- | :--------------: | :------: | :------------------------------------------------------------------------ |
  | id        |      string      |   YES    | id string that matches the corresponding WalkthroughElement               |
  | content   | function/Element |   YES    | This is the view displayed in the tooltip popover bubble                  |
  | placement |      string      |    NO    | Determines placement of tooltip in relation to the element it is wrapping |

## Walkthrough using steps

- ### Example

  ![Alt Text](https://raw.githubusercontent.com/xtech-guru/walkthrough-review/master/assets/img02.gif)

- ### Installation

  To create a walkthrough steps, we need only to add this package `react-native-app-intro-slider` to our project.

* ### Usage

  `AppIntroSlider` is based on `FlatList` including other new properties so its usage is almost similar.

  ```bash
      import React from 'react';

      import slides from './slides';

      const Slider = function() {
          return (
              <AppIntroSlider
                  renderItem={renderItem}
                  data={slides}
                  onDone={() => console.log("Done")}
                  onSkip={() => console.log("onSkip")}
                />
          )
      }
  ```
