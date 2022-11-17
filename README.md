# v-nav-bar

## Installation
```
npm i v-nav-bar
```

### Module import
```
import vNav from 'v-nav-bar/src/components/v_nav'
```
### Template
```html
<v-nav>
    <div class="adaptive-nav-item" v-for="(item, index, key) in 10" :key="key">
        <div>Item - {{item}}</div>
    </div>
</v-nav>
```
### Template with params
```html
<v-nav :options="options">
    <div class="adaptive-nav-item" v-for="(item, index, key) in 10" :key="key">
        <div>Item - {{item}}</div>
    </div>
</v-nav>
```
### Params
```js
data: () => {
    return {
        options: {
            distanceBetweenElements: '5px', // px
            positionNav: 'center' // left / right / center
        }
    }
}
```
### Slots
```
iconBtn: Icon for the menu button
```
