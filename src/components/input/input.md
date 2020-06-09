This component is made by styling input element provided by html5. It supports all the props supported by input tag along with four special props error, label, prefix and suffix. By default input cover 100% width.

```jsx
<Input
    label="Field label"
    placeholder="Type here"
/>
```
Field with error set
```jsx
<Input
    label="Field label"
    placeholder="Type here"
    error="Enter a valid value!"
/>
```
Field with prefix set
```jsx
<Input
    label="Field label"
    prefix="Contact"
    placeholder="Type here"
/>
```
Field with suffix set
```jsx
<Input
    label="Field label"
    suffix=".vers.in"
    placeholder="Type here"
/>
```
 Note, these components are designed to be placed inside a grid system, so prefer using them with a grid system. Recommendation: react-grid-system, or create your own grid :P  
```js
<div style={{display:"flex"}}>
    <div>
        <Input
            label="Field label"
            placeholder="Type here"
        />
    </div>
</div>
```