import{ __SYD, __c, __m, __sC, __sS , __p} from "../../sydneyLib/sydneyDom.js"

__SYD.hsec3_video_container = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{background:'transparent'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"Luxury furnished serviced apartments in Times Square",size:__p(['hsec3_video_container','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-transform:capitalize;text-align:center;max-width:900px;padding:5px 15px;"}),
            __SYD.text_lib_type_p_glob_vfit({cnt:'Nestled in a prime location, our apartments provide easy access to urban amenities while offering a tranquil retreat away from the hustle and bustle.',size:'16px',clr:'#fff',inject:'line-height:25px;max-width:950px;text-align:center'}),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;position:relative'
                },
                [
                    __c(
                        'video',
                        {
                            style:'width:100%;max-height:calc(100vh - 80px);'+__sC['border-rad-15'](),
                            class:'thin_border'
                            // controls:true
                        },
                    ),
                    __c(
                        'div',
                        {
                            style:'position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)'
                        },
                        [
                            __SYD.iconify_30px({attr:'playBtn',inject:`display:block;${__p(['hsec3_video_container','font'],'40px') === '40px' ? 'min-height:50px;min-width:50px;' : ''}`})
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:'hsec3_video_container',
                state:{font:'40px'}
            },
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}