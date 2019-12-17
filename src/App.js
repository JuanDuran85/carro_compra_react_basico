import React from 'react';
import logo from './logo.svg';
import Producto from './componentes/producto';
import './App.css';
import {Row, Container} from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Producto
          titulo="Laptop HP Pavilion x360 Convertible"
          imagen="https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/f/r/front_pavilion.png"
          descripcion="Intel® Core™ i5-8265U Processor. Frecuencia base de 1,6 GHz, hasta 3,9 GHz con tecnología Intel® Turbo Boost, 6 MB de caché, 4 núcleos"
          precio="USD 866.87"
        />
        <Producto
          titulo="Audífonos inalámbricos QuietComfort 35"
          imagen="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35/product_silo_images/qc35_black_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png"
          descripcion="Conecta y alterna fácilmente entre múltiples dispositivos móviles. Deshabilita las indicaciones de voz"
          precio="USD 50.00"
        />
        <Producto
          titulo="TVC PANASONIC 65 LED TX-65DX900E 4K STV"
          imagen="https://i.blogs.es/645b69/televisor-samsung-55uh650v-55--led-ultrahd-4k-smarttv-wifi/450_1000.jpg"
          descripcion="El televisor de referencia de LG de este año con tecnología Quantum. Gran diseño, soporte completo de los estándares HDR y WebOS 3.0"
          precio="USD 2000.00"
        />
        <Producto
          titulo="Huawei P30 Lite"
          imagen="https://http2.mlstatic.com/version-global-huawei-p30-lite-movil-telefono-6gb-ram-128gb-D_NQ_NP_654615-MLC31415189861_072019-F.webp"
          descripcion="Huawei P30 Lite Móvil Teléfono 6gb Ram 128gb"
          precio="USD 380.00"
        />
      </Row>
    </Container>
  );
};

export default App;
