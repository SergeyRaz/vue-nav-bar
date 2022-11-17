# v-nav-bar

## Plugin under development

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
<v_nav>
    <div class="adaptive-nav-item" v-for="(item, index, key) in 10" :key="key">
        <div>Item - {{item}}</div>
    </div>
</v_nav>
```
### Template with params
```html
<v_nav :options="options">
    <div class="adaptive-nav-item" v-for="(item, index, key) in 10" :key="key">
        <div>Item - {{item}}</div>
    </div>
</v_nav>
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
