 This component is based on react-datetime library, follow this link https://github.com/YouCanBookMe/react-datetime, for complete documentation. This component supports two custom props label and error which are documented in props and method section. By default datetime cover 100% width.

```jsx
 <DateTime
    label={"Select Date-Time"}
/>
```
Field with error set
```jsx
<DateTime
    label={"Select Date-Time"}
    error={"Select valid value"}
/>
```
 Note, these components are designed to be placed inside a grid system, so prefer using them with a grid system. Recommendation: react-grid-system, or create your own grid :P  
```js
<div style={{display:"flex"}}>
    <div>
       <DateTime
            label={"Select Date-Time"}
        />
    </div>
</div>
```