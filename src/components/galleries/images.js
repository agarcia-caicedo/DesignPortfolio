import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const tileData = [
  {
    title: "Paranoid",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbsvosi-420ebd9a-ef5c-40a6-870a-3b54169a28be.png/v1/fill/w_894,h_894,q_70,strp/paranoid__stoned__by_jm4tw_dbsvosi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzdm9zaS00MjBlYmQ5YS1lZjVjLTQwYTYtODcwYS0zYjU0MTY5YTI4YmUucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4MrCqem3a9jY1sPpKt45vwioHHpCPmlyvTJqlbTBOno",
    cols: 1,
  },
  {
    title: "Positive Mental Attitude",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dccjhkm-94dfc7d5-fead-492b-92c5-3a91cb2f7a3c.png/v1/fill/w_894,h_893,q_70,strp/positive_mental_attitude_by_jm4tw_dccjhkm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMyIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGNjamhrbS05NGRmYzdkNS1mZWFkLTQ5MmItOTJjNS0zYTkxY2IyZjdhM2MucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dKH-a9HGj9NiSwWU2FR3x-fHnLqBQDPAg_HKiX0bU_o",
    cols: 1,
  },
  {
    title: "Breakfast with Friends",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbtozo6-61118a05-a0ed-4008-a30d-223922b3f521.png/v1/fill/w_1224,h_653,q_70,strp/breakfast_is_better_with_friends_by_jm4tw_dbtozo6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJ0b3pvNi02MTExOGEwNS1hMGVkLTQwMDgtYTMwZC0yMjM5MjJiM2Y1MjEucG5nIiwid2lkdGgiOiI8PTMwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.L9szGPy_rw2KYfGwqDIbV2CdPAU2tZPtWB8i4gBbg2E",
    cols: 2,
  },
  {
    title: "Colonel Moran",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dcijnv3-c89c61d1-5f7e-45a9-8f4e-60b4259225e4.png/v1/fill/w_929,h_861,q_70,strp/colonel_moran_by_jm4tw_dcijnv3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ5IiwicGF0aCI6IlwvZlwvYzZlOTg2NTctYWMyYy00MmY2LWE2ZWMtMmI5M2Y5ZGU0MDk3XC9kY2lqbnYzLWM4OWM2MWQxLTVmN2UtNDVhOS04ZjRlLTYwYjQyNTkyMjVlNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FP1N-RavsRnT_9pree1W2uE3sOYyaJJseqKaRM_i7Lo",
    cols: 1,
  },
  {
    title: "Blue",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbs92bl-efa15b14-1fff-460d-a749-0a5973114ee6.png/v1/fill/w_1032,h_774,q_70,strp/blue_by_jm4tw_dbs92bl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzOTJibC1lZmExNWIxNC0xZmZmLTQ2MGQtYTc0OS0wYTU5NzMxMTRlZTYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nTec8pLbtZd0ruSCBXoD4MRtAAUKA605UGjlphW1D9Y",
    cols: 2,
  },
  {
    title: "Deep Thought",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbsuhm8-d822e4fc-0b39-4cdc-864e-f94a20f1f7d1.png/v1/fill/w_1032,h_774,q_70,strp/deep_thought_by_jm4tw_dbsuhm8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzdWhtOC1kODIyZTRmYy0wYjM5LTRjZGMtODY0ZS1mOTRhMjBmMWY3ZDEucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pJXEt2QxezOpKUYMzm9hplqfp1c9pvC153T5jgB7TwM",
    cols: 1,
  },
  {
    title: "You can't make an omelete",
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbstmgh-cc45fc44-b520-4088-b24a-d6de419fde73.png/v1/fill/w_1224,h_653,q_70,strp/you_can_t_make_an_omelet_by_jm4tw_dbstmgh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzdG1naC1jYzQ1ZmM0NC1iNTIwLTQwODgtYjI0YS1kNmRlNDE5ZmRlNzMucG5nIiwid2lkdGgiOiI8PTMwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1ylzcAKegOz4Sf3Uam9z0CZxEHcV4ofs9iYxR663tlM",
    cols: 2,
  },
  {
    title: "Illusion",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbt9dg9-828f8065-d547-44f6-a95c-82d136d49f89.png/v1/fill/w_1000,h_800,q_70,strp/illusion_by_jm4tw_dbt9dg9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJ0OWRnOS04MjhmODA2NS1kNTQ3LTQ0ZjYtYTk1Yy04MmQxMzZkNDlmODkucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YNj5u7WtiC4sd6i27b8hJqMeJ7tOwOHQyhOHfU3Qq4M",
    cols: 1.5,
  },
  {
    title: "Feline Good",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbuh1nu-55d04683-84e6-4857-8767-25c545d2d1e3.png/v1/fill/w_867,h_921,q_70,strp/feline_good_by_jm4tw_dbuh1nu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJ1aDFudS01NWQwNDY4My04NGU2LTQ4NTctODc2Ny0yNWM1NDVkMmQxZTMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LCZxjyOHqDlGL3X18L6CderrilyGSzveC3_tf44t1iA",
    cols: 1,
  },
  {
    title: "The Secret Service",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbwjbc3-981e00e1-bd44-4339-bd68-6cbab4b6b4d8.png/v1/fill/w_1024,h_1560,q_80,strp/the_secret_service_by_jm4tw_dbwjbc3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU2MCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJ3amJjMy05ODFlMDBlMS1iZDQ0LTQzMzktYmQ2OC02Y2JhYjRiNmI0ZDgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UT3Fi4evUg13-AJwvbDHwajOMJkDFgWeVvs_o_P6E7s",
    cols: 1,
  },
  {
    title: "Savoureux",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbu27g0-912a77b7-d24b-4d37-aa31-8faebb811b7e.png/v1/fill/w_1118,h_715,q_70,strp/savoureux_by_jm4tw_dbu27g0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJ1MjdnMC05MTJhNzdiNy1kMjRiLTRkMzctYWEzMS04ZmFlYmI4MTFiN2UucG5nIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Bgcjro8QeWyd5en4Qqk9zuukLdsQ-g-SQtoBCQYSpE0",
    cols: 1.5,
  },
  {
    title: "BJA",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbg5sdx-ef7366e3-e18f-4f99-b757-4ce00853607e.png/v1/fill/w_986,h_810,q_70,strp/billie_joe_armstrong_by_jm4tw_dbg5sdx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MiIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJnNXNkeC1lZjczNjZlMy1lMThmLTRmOTktYjc1Ny00Y2UwMDg1MzYwN2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SMYLz8TALbhv-QLzoHsK66ivtWF5F9QOtlHxRElemtc",
    cols: 1,
  },
  {
    title: "Witch",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbscs3u-b4652edf-dabf-4fe1-8f28-240b35e53b90.png/v1/fill/w_894,h_894,strp/witch_by_jm4tw_dbscs3u-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzY3MzdS1iNDY1MmVkZi1kYWJmLTRmZTEtOGYyOC0yNDBiMzVlNTNiOTAucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.t4Or2cKXx8eNZ5N2ryDtG9i-xDreiRAPAIiGVtPrUm0",
    cols: 1,
  },
  {
    title: "Armatage Shanks",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dbs6043-ff6c9b20-c6f7-45b0-ba1f-1410f3758f3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGJzNjA0My1mZjZjOWIyMC1jNmY3LTQ1YjAtYmExZi0xNDEwZjM3NThmM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WAwHvTg3W_W900LX72FrgkqCyj2-XNYYLquTTGmsgAs",
    cols: 1,
  },
  {
    title: "The Wrath of the Lamb",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6e98657-ac2c-42f6-a6ec-2b93f9de4097/dcmro9s-d70c4145-cf72-4b7f-883d-fd49d7ef4234.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZTk4NjU3LWFjMmMtNDJmNi1hNmVjLTJiOTNmOWRlNDA5N1wvZGNtcm85cy1kNzBjNDE0NS1jZjcyLTRiN2YtODgzZC1mZDQ5ZDdlZjQyMzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9DPDHpvTk04MHBSnzRW71a6kwr-lzoa5F4wMz8OeBNI",
    cols: 2,
  }
]

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 800,
    height: 500,
  },
})

const Images = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
export default Images
