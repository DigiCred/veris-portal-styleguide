This component is made by styling and wrapping input tag in divs. Divs are given unique class name for styling the component to your needs. It supports all the props supported by input tag (with type property set to checkbox) along with two special props error and label. By default checkbox cover 100% width.

```jsx
<Checkbox
    label="Field label"
    placeholder="Type here"
/>
```
Field with error set
```jsx
<Checkbox
    label="Field label"
    placeholder="Type here"
    error="Enter a valid value!"
/>
```