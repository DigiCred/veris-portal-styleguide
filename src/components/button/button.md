By default buttons cover 100% width. This componnet mostly consists of divs and each div has been given unique class for easy identification, so you can customise the styles effortlessly. Tinker with the component as much you like to get the desired looks. Most common props are documented in props and methods section but you can experiment with other props also but first you will have to check compatibility of the prop.
  
```js
<Button
    type="submit"
    theme="vrs-btn-primary"
    label={"Continue"}
    tooltip="Tooltip"
/>
```
Themes <br/>
From left to right: primary, secondary, icon, icon-secondary
```js
<div style={{display:"flex", alignItems:"center"}}>    
    <Button
        theme="vrs-btn-primary"
        label={"Continue"}
        tooltip="vrs-btn-primary"
        style={{marginRight: 20}}
    />
    <Button
        theme="vrs-btn-secondary"
        label={"Continue"}
        tooltip="vrs-btn-secondary"
        style={{marginRight: 20}}
    />
    <Button
        theme="vrs-btn-icon"
        icon="X"
        tooltip="vrs-btn-icon"
        style={{marginRight: 20}}
    />
    <Button
        theme="vrs-btn-icon-only"
        icon="X"
        tooltip="vrs-btn-icon-only"
        style={{marginRight: 20}}
    />
</div>
```
 Note, these components are designed to be placed inside a grid system, so prefer using them with a grid system. Recommendation: react-grid-system, or create your own grid :P 
```js
<div style={{display:"flex"}}>
    <Button
        theme="vrs-btn-primary"
        label={"Continue"}
        style={{marginRight: 20}}
    />
    <Button
        theme="vrs-btn-primary"
        label={"Continue"}
        style={{marginRight: 20}}
        loading={true}
    />
    <Button
        theme="vrs-btn-secondary"
        label={"Continue"}
        tooltip="hello"
    />
</div>
```