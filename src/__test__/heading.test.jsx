import { render,screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux-mock-store";
import { thunk } from "redux-thunk";
import { exampleCountryDetail } from "../utils/constants";

const mockStore = configureStore([thunk]);


//redux kullanılan bileşenleri test ederlen test edicez
//senaryodaki store'un datasına göre store'un sahte bir versiyonunu
//oluşturmalıyız

it("store yükleme durumundayken ekrana loader basılır",()=>{
 // bu test senaryosuna özel storeun kopyasını oluştur
 const store = mockStore({isLoading:true, error:null ,data:null});
  //bileşeni render et
  render(
   
     <Provider store={store}>
       <BrowserRouter>
          <Heading/>
        </BrowserRouter>
      </Provider>
  );
 screen.getByTestId("header-loader");

});

it("store yükleme bittiğinde  ekranda  loader yoktur",()=>{
   // bu test senaryosuna özel storeun kopyasını oluştur
   const store = mockStore({isLoading:false, error:null , data:null});

   //bileşeni renderla

   render(
    <Provider  store={store}>
      <BrowserRouter>
         <Heading/>
      </BrowserRouter>
    </Provider>
   );
   //ekranda loader id sine sahip element varsa al
   const loader = screen.queryByTestId("heading-loader");
   //ekranda loader yoktur
   expect(loader).toBeNull();
   
});

it("store'a veri geldiğinde ekrana veriler   basılır",()=>{
  //store un veri geldiği seneryadaki kopyasını oluştur
  const store =mockStore({
    isLoading:false,
    error:null,
    data:exampleCountryDetail,
  });

  //bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading/>
      </BrowserRouter>
    </Provider>
  );

  //ülke ismi ekrana geldi mi?
  screen.getByRole("heading", {name:exampleCountryDetail.countryw});

  //resim ekkrana geldi mi?
 const img =screen.getByAltText("Flag");

  //resmin kaynağı doğru mu?
  expect(img).toHaveAttribute("src",exampleCountryDetail.flags.png);
});