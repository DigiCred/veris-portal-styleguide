 This component is based on react-select library, follow this link https://react-select.com, for complete documentation. This component supports two custom props label and error which are documented in props and method section. By default select cover 100% width.

```jsx
<Select
    label="Field label"
    placeholder="Type here"
/>
```
Field with error set
```jsx
<Select
    label="Field label"
    placeholder="Type here"
    error="Select a valid value!"
/>
```
 Note, these components are designed to be placed inside a grid system, so prefer using them with a grid system. Recommendation: react-grid-system, or create your own grid :P  
```js
<div style={{display:"flex"}}>
    <div style={{width:"300px"}}>
        <Select
            label="Field label"
            placeholder="Type here"
            error="Enter a valid value!"
        />
    </div>
</div>
```