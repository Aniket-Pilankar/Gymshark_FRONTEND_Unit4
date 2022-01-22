import {shownav , crouzel} from "./components/navbar.js";

document.querySelector("#header").innerHTML = shownav()
crouzel()




function appendData(data,location){
    location.innerText="";

    data.forEach((elem)=>{
        let div1=document.createElement('div');

        let image=document.createElement('img');
        
        image.src=elem.img;

        let div2=document.createElement('div');

        let div3=document.createElement('div');

        let p1=document.createElement('p');

        p1.innerText=elem.name;

        let p2=document.createElement('p');

        p2.innerText=`$${elem.price} USD`;
        p2.style.fontWeight='bold';

        let p3=document.createElement('p');

        p3.innerText=elem.color;

        div3.append(p1,p2)

        div2.append(div3,p3);

        div1.append(image,div2);

        location.append(div1);


    })

}


var cont=document.getElementById('cont');

var input=document.getElementById('search');


var response;

input.addEventListener('keypress',searchResult)


function searchResult(event){
    if(event.key=='Enter'){
      // console.log('event:', event)

       let query=input.value;
       document.getElementById('clear').addEventListener('click',function(){
           document.getElementById("search").textContent="";
           console.log(query)
       })
      // console.log('query:', query)
//console.log(men)
     if(query=='men'){
         appendData(men,cont);

     }

      else if(query=='women'){
          appendData(women,cont)
      } 
      else if(query=='leggins'){
          appendData(leg,cont)
      }
      else if(query=='tshirt'){

        appendData(tshirt,cont)
      }
      else{
          cont.innerText=`We're sorry but no results could be found for "${query}"`
      }

    }


}

// document.getElementById('search').addEventListener('click',del)

// function del(){
//    // window.location.href='./search.html'

//    input.value=''
// }





var men=[
    
        {
         img:"https://cdn.shopify.com/s/files/1/0156/6146/products/StudioPantBlackA1A3U10TIFF_IS_7670bc02-1d51-48f4-a255-f1726206c309_600x.jpg?v=1638156334",
         name:'STUDIO JOGGERS',
         price: '50.00',
         color: 'Black'
 
     },
    {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/BoldStringerBlackA1A5X.A-Edit_GB_BK_600x.jpg?v=1636751008',
         name:'BOLD STRINGER',
         price: '25.00',
         color:'BLACK'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioPantStudioGreenA1A3U.A-Edit_BK_600x.jpg?v=1638156334',
         name:'STUDIO JOGGERS',
         price: '50.00',
         color: 'GREEN'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXBOBSlingBagBlackI1A9U-BBKQ.A_ZH_ZH_600x.jpg?v=1642064022',
         name:'MANIMAL SLING BAG',
         price: '25.00',
         color:'BLACK'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXBobSnapbackBlackI1A9T-BBKQ.A_ZH_ZH_600x.jpg?v=1641568588',
         name:'MANIMAL SNAPBACK',
         price: '30.00',
         color:'BLACK'
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeWovenPantBlackA1A4B.A-Edit_BK_600x.jpg?v=1642030630',
         name:'RETAKE WOVEN JOGGERS',
         price: '75.00',
         color:'BLACK'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeHoodieBlackA1A5C.A-Edit_BK_600x.jpg?v=1642030630',
         name:'RETAKE HOODLE',
         price: '80.00',
         color:'BLACK'
     },
 
 {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeSeamless1-4ZipBlack-CharcoalGreyMarlA1A5H.A-Edit_BK_600x.jpg?v=1641568558',
         name:'RETAKE SEAMLESS ZIP1/4',
         price: '60.00',
         color:'Black/Charcoal Mrl'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeWovenPantCharcoalGreyA1A4B.A-Edit_BK_600x.jpg?v=1642030631',
         name:'RETAKE WOVEN JOGGERS',
         price: '75.00',
         color:'Charcoal Marl'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeSeamless1-4ZipLightGrey-BlackMarlA1A5H.A-Edit_BK_3cc70eb9-0960-490a-b47c-ccdb94f238b3_600x.jpg?v=1641568834',
         name:'RETAKE SEAMLESS ZIP1/4',
         price: '60.00',
         color:'LIGHT GREY/BLACK MARL'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeVestWildcardCharcoalGrey-BlackA1A6K.A-Edit_BK_600x.jpg?v=1641568556',
         name:'Retake Reversible Vest',
         price: '80.00',
         color:'Black/Marl'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeCrewWildcardBlackA1A6L.A-Edit_BK_600x.jpg?v=1642030629',
         name:'Retake Crew',
         price: '80.00',
         color:'Black'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeSeamlessSsT-ShirtLightGrey-BlackMarlA1A6U.A-Edit_BK_600x.jpg?v=1641568551',
         name:'Retake Seamless',
         price: '40.00',
         color:'Black Marl/Light Grey'
 
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/NewEraGsHeadbandBlackMarl.D2-Edit_ZH_ZH_2ac87b5c-4388-47a4-ab50-9faff3bea970_600x.jpg?v=1640079495',
         name:'New Era headband',
         price: '15.00',
         color:'Black'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeLsT-ShirtCharcoalGreyMarlA1A6M.A-Edit_BK_600x.jpg?v=1641568554',
         name:'Retake Long Sleeve T-Shirt',
         price: '40.00',
         color:'Charcoal Marl'
 
     },
     {
         img:'https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedJogger_PowerBlock_BlackA2A2X-BBBB.A_ZH_ZH_600x.jpg?v=1642499337',
         name:'Essential Oversize Joggers',
         price: '80.00',
         color:'Black'
 
     }
     
   ];
   


   var women=[
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RACERBACKTRAININGSPORTSBRAB1A6L-WBBM-XS-AQ2WHITE16.A_ZH_ZH_600x.jpg?v=1628105181',
        name:'Racer Back Training Bra',
        price: '35.00',
        color:'White'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXBOBSlingBagBlackI1A9U-BBKQ.A_ZH_ZH_600x.jpg?v=1642064022',
        name:'Manimal Sling Bag',
        price: '25.00',
        color:'Black'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/FlexCropTopBlackB1A3L.A-Edit_BK_600x.jpg?v=1642493505',
        name:'Flex Sports Long Sleeve Crop Top',
        price: '40.00',
        color:'Black'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/ESSENTIALRACERBACKTRAININGSPORTSBRA-B1A6M-UBBB-XS-AQ2-ALPINEBLUE40.A-Edit_AS_403e0f21-6354-4f96-9297-98b3e1211863_600x.jpg?v=1636750822',
        name:'EssentialRacer Back Training Bra',
        price: '35.00',
        color:'Light Blue'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedWWindbreakerBlackB1A1O-BBBB.A-Edit_CM_600x.jpg?v=1642030634',
        name:'speed Wind Breaker',
        price: '55.00',
        color:'Black'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXBobSnapbackBlackI1A9T-BBKQ.A_ZH_ZH_600x.jpg?v=1641568588',
        name:'Manimal Snapback',
        price: '30.00',
        color:'Black'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedTankBlack-CharcoalGreyMarlB1A5N-BBG2.A-Edit_BK_600x.jpg?v=1642030633',
        name:'Speed Tank',
        price: 25.00,
        color:'Black/Charcoal Marl'

    },

{
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedWWindbreakerNiagaraTealB1A1O-TBBM.A-Edit_BK_600x.jpg?v=1642030636',
        name:'Speed Windbreaker',
        price: 55.00,
        color:'Teal'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedWShortsCharcoalGreyB1A4U-GBBC.A-Edit_BK_600x.jpg?v=1642030632',
        name:'Speed Shorts',
        price: 35.00,
        color:'Grey'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedTankSmokeyGrey-FreshGreenMarlB1A5N-GBM4.A_ZH_ZH_600x.jpg?v=1642030634',
        name:'Speed Tank',
        price: '35.00',
        color:'Smokey Grey/Grey Marl'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedWShortsWhiteB1A4U-WBBM.A-Edit_BK_600x.jpg?v=1642030635',
        name:'Speed Shorts',
        price: 35.00,
        color:'White'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsRawCropTopREP-L-A0016B2A2MN1.A_ZH_ZH_1dd17faa-6ac4-435c-aa37-722f07b504da_600x.jpg?v=1642030622',
        name:'KK Fir Raw Crop Top',
        price: '35.00',
        color:'Black Camo Print'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/NewEraGsHeadbandBlackMarl.D2-Edit_ZH_ZH_2ac87b5c-4388-47a4-ab50-9faff3bea970_600x.jpg?v=1640079495',
        name:'New Era Band',
        price: 15.00,
        color:'Black'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsLeggingsGranadaGreenB2A2P.D1_ZH_ZH_f84d73c0-2cf3-4959-b8f5-7f2bc8075e1c_600x.jpg?v=1642030620',
        name:'KK Fit 7/8 Leggins',
        price: 55.00,
        color:'Green Juice'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsRawCropTopWarmBuffB2A2M.D1_ZH_ZH_600x.jpg?v=1642030622',
        name:'KK Fit Raw Crop Top',
        price: '35.00',
        color:'Warm Buff'

    },
    {
        img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsRawCropTopEarthOrangeB2A2M.A_ZH_ZH_600x.jpg?v=1642180264',
        name:'KK Fit Raw Crop Top',
        price: '35.00',
        color:'Earth Orange'
    }
   ];

   var tshirt=[
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeLsT-ShirtCharcoalGreyMarlA1A6M.A-Edit_BK_600x.jpg?v=1641568554',
           name:'Retake Long Sleeve T-Shirt',
           price:'40.00',
           color:'Chacoal Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeLsT-ShirtBiscottiBrownMarl-CharcoalGreyA1A6M.A-Edit_BK_a08094a1-6d1b-4a65-9098-2e6ec676ba63_600x.jpg?v=1641820084',
           name:'Retake Long Sleeve T-Shirt',
           price:'40.00',
           color:'Chacoal/Light Brown Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeSeamlessSsT-ShirtLightGrey-BlackMarlA1A6U.A-Edit_BK_600x.jpg?v=1641568551',
           name:'Retake Seamless T-Shirt',
           price:'40.00',
           color:'Light Grey/Black Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/RetakeSeamlessSsT-ShirtBlack-CharcoalGreyMarlA1A6U.A-Edit_BK_600x.jpg?v=1641568555',
           name:'Retake Seamless T-Shirt',
           price:'40.00',
           color:'Black/Charcoal Marl '
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedLsT-ShirtBlack-CharcoalGreyMarlA2A6E-BBG2.A-Edit_BK_600x.jpg?v=1639761910',
           name:'Speed Long Sleeve T-Shirt',
           price:'40.00',
           color:'Charcoal Marl/Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXCentralOversizedT-ShirtBlackA2A5D-BBBB.A_ZH_ZH_600x.jpg?v=1639505390',
           name:'Central Oversized T-Shirt',
           price:'25.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedT-ShirtMidnightTeal-TurkishTealMarlA2A6F-TBCX.A-Edit_BK_600x.jpg?v=1639761911',
           name:'Speed T-Shirt',
           price:'35.00',
           color:'Teal/Teal Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GfxInfillSsT-ShirtBlackA2A4U-BBBB.A-Edit_BK_600x.jpg?v=1639010367',
           name:'Sharkhead Infill T-Shirt',
           price:'25.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/SpeedT-ShirtBlack-CharcoalGreyMarlA2A6F-BBG2.A-Edit_BK_600x.jpg?v=1639761910',
           name:'Speed T-Shirt',
           price:'35.00',
           color:'Black/Charcoal Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GfxInfillSsT-ShirtCamoGreenA2A4U-EBBL.A-Edit_BK_600x.jpg?v=1639010368',
           name:'Sharkhead Infill T-Shirt',
           price:'25.00',
           color:'Green'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GFXCentralOversizedT-ShirtWhiteA2A5D-WBBMA_ZH_ZH_600x.jpg?v=1639505391',
           name:'Central Oversized T-Shirt',
           price:'25.00',
           color:'White'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GfxInfillSsT-ShirtBlazerRedA2A4U-RBBB.A-Edit_BK_600x.jpg?v=1639010369',
           name:'Sharkhead Infill T-Shirt',
           price:'25.00',
           color:'Red'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioT-ShirtBlackA1A6A.ATIFF_IS_851ed074-126c-4116-a916-f8f09b22eba1_600x.jpg?v=1636751170',
           name:'Studio T-Shirt',
           price:'24.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/GfxInfillSsT-ShirtFaunaTealA2A4U-TBBB.A-Edit_BK_600x.jpg?v=1639010370',
           name:'Sharkhead Infill T-Shirt',
           price:'25.00',
           color:'Teal'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioWShortSleeveTopBlackB1A7A15-Edit_BK_0295f437-bcb9-4127-a44f-c1453f838b49_600x.jpg?v=1639432697',
           name:'Studio T-Shirt',
           price:'40.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtBlackA1A3E.A-Edit_BK_f61ca72a-8e38-4570-ab8d-657aec1834c4_600x.jpg?v=1635433885',
           name:'Oversized T-Shirt',
           price:'25.00',
           color:'Black'
       },
   ];

   var leg=[
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsLeggingsGranadaGreenB2A2P.D1_ZH_ZH_f84d73c0-2cf3-4959-b8f5-7f2bc8075e1c_600x.jpg?v=1642030620',
           name:'KK Fit 7/8 Leggins',
           price:'55.00',
           color:'Green Juice'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsLeggingsEarthOrangeB2A2P.A_ZH_ZH_2cf1c58f-ca2b-42b4-b559-95fea2541600_600x.jpg?v=1642180238',
           name:'KK Fit 7/8 Leggins',
           price:'55.00',
           color:'Earth Orange'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/KkTwinsLeggingsBlackB2A2P.A_ZH_ZH_fa3ef050-6ba1-4d5f-b778-2eba3d737858_600x.jpg?v=1642180316',
           name:'KK Fit 7/8 Leggins',
           price:'55.00',
           color:'Black Camo Print'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptOmbre_Knitted_SeamlessLeggingsStudioGreenB1A2L-EBD011_ZH_ZH_600x.jpg?v=1639761899',
           name:'Adapt Ombre Seamless Leggins',
           price:'60.00',
           color:'Green/Light Greeen'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptOmbre_Knitted_SeamlessLeggingsBlackB1A2L-BBCX4_ZH_ZH_600x.jpg?v=1639761899',
           name:'Adapt Ombre Seamless Leggins',
           price:'60.00',
           color:'Black/Grey'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioWLeggingsBlackB1A1W6-Edit_BK_600x.jpg?v=1639010371',
           name:'Studio Leggins',
           price:'60.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptOmbre_Knitted_SeamlessLeggingsMossRoseB1A2L-KBBJ12_ZH_ZH_600x.jpg?v=1639761899',
           name:'Adapt Ombre Seamless Leggins',
           price:'60.00',
           color:'Rose Pink/Light Blue'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/VITALSEAMLESSLEGGINGSBLACK27.A_ZH_ZH_600x.jpg?v=1638156302',
           name:'Vital Seamless 2.0 Leggins',
           price:'50.00',
           color:'Black Marl'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptOmbre_Knitted_SeamlessLeggingsLavaPinkB1A2L-RBCW11-Edit_BK_600x.jpg?v=1639761899',
           name:'Adapt Ombre Seamless Leggins',
           price:'60.00',
           color:'Pink/Red'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioWLeggingsIndianYellowB1A1W9_ZH_ZH_600x.jpg?v=1639010372',
           name:'Studio Leggins',
           price:'60.00',
           color:'Yellow'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/VisionLeggingsBlackB1A8V19-Edit_BK_600x.jpg?v=1638156338',
           name:'Vision Leggins',
           price:'45.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/WhitneyV3LeggingBlack2GLLG555538.ATIFF_IS_1f11aa90-6e57-4783-b895-b3a299316149_600x.jpg?v=1638164164',
           name:'Whitney Mess Leggins',
           price:'60.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/StudioWLeggingsEarthOrangeB1A1W10_ZH_ZH_600x.jpg?v=1639010372',
           name:'Studio Leggins',
           price:'60.00',
           color:'Orange'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/TRAININGFULLLENGTHLEGGINGSB1A1T-BBBB-XS-BZ1BLACK20.A-Edit_AS_600x.jpg?v=1628104933',
           name:'Training Leggins',
           price:'30.00',
           color:'Black'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/VisionLeggingsGranadaGreenB1A8V40-Edit_BK_ca1e5ddb-2f7f-4c77-a735-7917b6a5a906_600x.jpg?v=1638156338',
           name:'Vision Leggins',
           price:'45.00',
           color:'Green'
       },
       {
           img:'https://cdn.shopify.com/s/files/1/0156/6146/products/PausePremiumLeggingsPebbleGreyB1A2D17_ZH_ZH_600x.jpg?v=1638188660',
           name:'Pause Cossy Leggins',
           price:'55.00',
           color:'Grey'
       }
   ];

   
