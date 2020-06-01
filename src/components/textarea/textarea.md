This component is made by styling teaxtarea element provided by html5. It supports all the props supported by textarea tag along with two special props error and label. By default textarea cover 100% width.

```jsx
<Textarea
    label="Field label"
    placeholder="Type here"
/>
```
Field with error set
```jsx
<Textarea
    label="Field label"
    placeholder="Type here"
    error="Enter a valid value!"
/>
```
 Note, these components are designed to be placed inside a grid system, so prefer using them with a grid system. Recommendation: react-grid-system, or create your own grid :P  
```js
<div style={{display:"flex"}}>
    <div>
        <Textarea
            label="Field label"
            placeholder="Type here"
            error="Enter a valid value!"
        />
    </div>
</div>
```