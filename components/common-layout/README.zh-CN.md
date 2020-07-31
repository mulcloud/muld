# Layout 布局

### 介绍

移动端常用排版布局

## 代码演示

### 列表式 - SwiftUi

```html
<VStack spacing={20} padding={10}>
    <HStack spacing={15}>
        <div className="img-placeholder"></div>
        <VStack spacing={10}>
            <div className="goods-title"></div>
            <div className="goods-description"></div>
            <div className="goods-other-info"></div>
        </VStack>
    </HStack>
    <HStack spacing={15}>
        <div className="img-placeholder"></div>
        <VStack spacing={10}>
            <div className="goods-title"></div>
            <div className="goods-description"></div>
            <div className="goods-other-info"></div>
        </VStack>
    </HStack>
    <HStack spacing={15}>
        <div className="img-placeholder"></div>
        <VStack spacing={10}>
            <div className="goods-title"></div>
            <div className="goods-description"></div>
            <div className="goods-other-info"></div>
        </VStack>
    </HStack>
</VStack>
```

### 列表式 - 栅格

```html
<Row className="mb20" type="flex" justify="space-around">
    <Col span="5">
        <div className="img-placeholder"></div>
    </Col>
    <Col span="16">
        <div className="goods-title mb10"></div>
        <div className="goods-description mb10"></div>
        <div className="goods-other-info"></div>
    </Col>
</Row>
<Row className="mb20" type="flex" justify="space-around">
    <Col span="5">
        <div className="img-placeholder"></div>
    </Col>
    <Col span="16">
        <div className="goods-title mb10"></div>
        <div className="goods-description mb10"></div>
        <div className="goods-other-info"></div>
    </Col>
</Row>
<Row className="mb20" type="flex" justify="space-around">
    <Col span="5">
        <div className="img-placeholder"></div>
    </Col>
    <Col span="16">
        <div className="goods-title mb10"></div>
        <div className="goods-description mb10"></div>
        <div className="goods-other-info"></div>
    </Col>
</Row>
```

### 宫格式 - SwiftUi

```html
<VStack spacing={20} padding={10}>
    <HStack spacing={15} alignX="center">
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
    </HStack>
    <HStack spacing={15} alignX="center">
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
    </HStack>
    <HStack spacing={15} alignX="center">
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
        <div className="img-placeholder"></div>
    </HStack>
</VStack>
```

### 宫格式 - 栅格

```html
<Row type="flex" justify="center" align="center">
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
</Row>
<Row type="flex" justify="center" align="center">
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder mb20"></div>
    </Col>
</Row>
<Row type="flex" justify="center" align="center">
    <Col span="6">
        <div className="img-placeholder"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder"></div>
    </Col>
    <Col span="6">
        <div className="img-placeholder"></div>
    </Col>
</Row>
```

### 图表式（上图下表）- SwiftUi

```html
<VStack spacing={20} padding={10}>
    <div className="chart-placeholder"></div>
    <div className="table-placeholder"></div>
</VStack>
```

### 图表式（上图下表）- 栅格

```html
<Row type="flex" justify="center" align="center">
    <Col span="23">
        <div className="chart-placeholder width100 mb20"></div>
    </Col>
</Row>
<Row type="flex" justify="center" align="center">
    <Col span="23">
        <div className="table-placeholder width100"></div>
    </Col>
</Row>
```

### 卡片式 - SwiftUi

```html
<VStack spacing={20} padding={10}>
    <VStack spacing={10}>
        <div className="img-placeholder-card"></div>
        <div className="goods-title"></div>
        <div className="goods-description"></div>
        <div className="goods-other-info"></div>
    </VStack>
    <VStack spacing={10}>
        <div className="img-placeholder-card"></div>
        <div className="goods-title"></div>
        <div className="goods-description"></div>
        <div className="goods-other-info"></div>
    </VStack>
</VStack>
```

### 卡片式 - 栅格

```html
<Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="img-placeholder-card mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-title mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-description mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-other-info mb10"></div>
      </Col>
  </Row>
</Row>
<Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="img-placeholder-card mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-title mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-description mb10"></div>
      </Col>
  </Row>
  <Row type="flex" justify="center">
      <Col span="23">
          <div className="goods-other-info mb10"></div>
      </Col>
  </Row>
</Row>
```
