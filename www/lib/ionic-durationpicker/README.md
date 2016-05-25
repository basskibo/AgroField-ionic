# ionic-durationpicker
- [Description](#description)
- [Usage](#usage)
- [Configuration](#configuration)
- [Improvements](#improvements)
- [Contact](#contact)

----------------------------------

## Description:
This ionic plugin provides you with a customizable `$ionicPopup` to show to your users whenever you need them to input a duration. The plugin will convert the duration into seconds, and then store it in a variable of your choosing.

I couldn't find an existing plugin to handle duration inputs, but this was largely inspired by **[rajeshwarpatlolla](https://github.com/rajeshwarpatlolla)**'s **/ [ionic-timepicker](https://github.com/rajeshwarpatlolla/ionic-timepicker)** (GitHub) | [Ionic.io Market](https://market.ionic.io/plugins/ionictimepicker)

##### Links
[CodePen Demo](http://codepen.io/kshaaban/full/LNZzoY/)

[Ionic.io Market](https://market.ionic.io/plugins/ionic-durationpicker)

## Usage:
1. Install the plugin into your ionic project using bower:

    ```
    bower install ionic-durationpicker --save
    ```

2. Include it in your `index.html` file:

    ```html
    <script src="lib/ionic-durationpicker/dist/ionic-durationpicker.min.js"></script>
    ```

3. Inject `ionic-durationpicker` as a dependency for your angular module:

    ```js
    angular.module('myApp', ['ionic', 'ionic-durationpicker']);
    ```

4. You may use it immediately in your templates with the default configuration:

    ```html
    <ionic-durationpicker idp-label="Mile Run Duration" idp-label-icon="ion-clock" idp-output="durations.mileRun">
    </ionic-durationpicker>
    ```
    `idp-label` is the string that labels the generated `ion-item`. If you would like to include an ionicon in your ion-item, then you can pass the icon name into `idp-label-icon`. And the variable you pass into `idp-output` will be used to store the duration input in seconds format. You may also use it to initialize a duration from an integer representing a number of seconds. Be wary though, currently there are no checks against what's already in that variable.

    For example, if your `$scope.durations.mileRun` had a value of `527`, then the above snippet will result with:

    <img src="https://github.com/kshaaban-/ionic-durationpicker/raw/screenshots/usage-step04-01.png" width="300" alt="ion-item default configuration screenshot" title="ion-item default configuration screenshot">

    **Note 1:** Make sure you pass an object property into `idp-output` , otherwise the duration will not persist because of the way two-way data binding works with primitive datatypes (integers representing the duration in this case).
    
    **Note 2:** See [Configuration](#configuration) section below to configure this `ion-item`.

5. If a user taps on the duration button, they get the following popup:

    <img src="https://github.com/kshaaban-/ionic-durationpicker/raw/screenshots/usage-step05-01.png" width="250" alt="ionicPopup default configuration screenshot" title="ionicPopup default configuration screenshot">

    The control arrows listen to `on-hold` / `on-release` events in addition to `ng-click`.

6. You can also create a configuration object in your controller:

    ```js
    angular
      .module('myApp')
      .controller('myController', ['$scope', function($scope) {
        $scope.durations = {
            mileRun: 527
        };

        $scope.mileRunConfig = {
          inputButtonType: 'button-assertive',
          popupTitle: 'Mile Run duration',
          popupSubTitle: 'How long does it take you to run one mile?',
          popupSaveLabel: 'Set',
          popupSaveButtonType: 'button-outline button-balanced',
          popupCancelLabel: 'Close',
          popupCancelButtonType: 'button-outline button-assertive'
        };
      });
    ```

    Then pass it into the plugin's directive:

    ```html
    <ionic-durationpicker idp-label="Mile Run Duration" idp-label-icon="ion-clock"
      idp-config="mileRunConfig" idp-output="durations.mileRun">
    </ionic-durationpicker>
    ```

    And you'll get this `ion-item`:

    <img src="https://github.com/kshaaban-/ionic-durationpicker/raw/screenshots/usage-step06-01.png" width="300" alt="ion-item custom configuration screenshot" title="ion-item custom configuration screenshot">

    And your popup becomes:

    <img src="https://github.com/kshaaban-/ionic-durationpicker/raw/screenshots/usage-step06-02.png" width="250" alt="ionicPopup custom configuration screenshot" title="ionicPopup custom configuration screenshot">

## Configuration
You can configure the plugin by passing an object containing any of the following properties to the `idp-config` attribute of the `<ionic-durationpicker>` directive (_**Note:** properties not modified will take their default values_):

Property        | Type (_Default Value_)                      | Description
:--------------:|:-------------------------------------------:|-------------------------------------------
rtl             | Boolean (_false_)                           | For Right-to-left languages, flips the button to the left and pulls the label to the right along with the icon in the generated `ion-item`.
inputButtonType | String (_'button-outline button-positive'_) | CSS class(es) for the button that shows the popup.
format          | String (_'MM:SS'_)                          | Duration Format. **Default value is currently the _only_ supported format.**
secondsStep     | Number (_1_)                                | Amount to increment/decrement seconds by on popup control arrow clicks.
minutesStep     | Number (_1_)                                | Amount to increment/decrement minutes by on popup control arrow clicks.
popupTitle      | String (_'Duration Picker'_)                 | Title for the `$ionicPopup`.
popupSubTitle   | String (_'Enter duration'_)                  | Sub Title.
popupSaveLabel  | String (_'Save'_)                            | Label for the save button.
popupSaveButtonType | String (_'button-positive'_)             | CSS class(es) for the save button.
popupCancelLabel | String (_'Cancel'_)                         | Label for the cancel button.
popupCancelButtonType | String (_'button-stable'_)             | CSS class(es) for the cancel button.

## Improvements
- Include more formats (Hours, Days, etc...).
- The component currently uses a `Date()` object to initialize the duration. Perhaps refactor that part... eventually!

## Contact
For issues with this plugin, feel free to open an issue on GitHub. You could also reach out to me directly on [Twitter](https://twitter.com/KhalShaa)!

## License
Code released under [the MIT license](LICENSE.md).
