# scrollClass

## Description :

滾動事件發生時對當前畫面指定的元素加入對應的Class

## Options :

Name      | type   | default | description
--------- | ------ | ------- | ---------------------
className | string | null    | 指定需要加入的 class 名稱 （必填）
delay     | number | 0       | 延遲加入class的時間 單位：微秒
increment | Bollin | false    | 延遲時間是否遞增

## Example :

### Basic

```
$('.article-wrapper.avatar').scrollClass({
      'className': 'animate_right',
    })
```

### Basic Options

```
$('.article-wrapper.avatar').scrollClass({
      'className': 'animate_right',
      'delay': 350,
      'increment': true
    })
```

--------------------------------------------------------------------------------

## Function Description

### srollClassEvent ()

滾動事件觸發與個別滿足下方條件時執行

判斷目前畫面中存在的指定元素 （ increment 為 true ,啟用延遲時間遞增時）
```
$(window).scrollTop() > 當前物件座標 - $(window).height() && $(window).scrollTop() < 當前物件座標 + 當前物件座標的高
```

判斷當前畫面與當前畫面之上的指定元素

```
  $(window).scrollTop() > scrollPosition - $(window).height()
```
