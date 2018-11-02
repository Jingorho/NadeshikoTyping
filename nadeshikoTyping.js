
//画像読み込み-----------------------------------------------------------
var ASSETS = {
    
    "menuBg": "https://chocolatetaiyaki.files.wordpress.com/2015/06/menuback2.jpg",
    "Lv1Btn": "https://chocolatetaiyaki.files.wordpress.com/2015/06/lvkanban01011.png",
    "Lv2Btn": "https://chocolatetaiyaki.files.wordpress.com/2015/06/lvkanban02011.png",
    "Lv3Btn": "https://chocolatetaiyaki.files.wordpress.com/2015/06/lvkanban03012.png",
    "Lv4Btn": "https://chocolatetaiyaki.files.wordpress.com/2015/06/laststage4.png",
    "waku": "https://chocolatetaiyaki.files.wordpress.com/2015/06/waku.png",
    
    // 'type': 'touch.m4a',
    "player": "https://chocolatetaiyaki.files.wordpress.com/2015/06/player.png",
    //"playerSS": "https://googledrive.com/host/0B8jw5k1BeSRJM0FDSEFSMjk5LTA",
    //"enemySS": "https://googledrive.com/host/0B8jw5k1BeSRJSjU5ZkVhMUVURG8",
    
    //SE
    //"bgm": "http://jsrun.it/static/assets/sound/01/sound.mp3",
    //"pinponSE": "http://jsrun.it/assets/y/T/T/B/yTTBV.mp3",
    //"booSE": "http://jsrun.it/assets/j/x/D/Y/jxDYu.mp3",
    //"clearSE": "http://jsrun.it/assets/7/2/S/s/72Ss5.mp3",
    
    //1ST
    "sougen1": "https://chocolatetaiyaki.files.wordpress.com/2015/06/sougen13.jpg",
    "sougen2": "https://chocolatetaiyaki.files.wordpress.com/2015/06/sougen21.jpg",
    "niwatori": "https://chocolatetaiyaki.files.wordpress.com/2015/06/niwatori3.png",
    
    //2ST
    "beach1": "https://chocolatetaiyaki.files.wordpress.com/2015/06/beach11.jpg",
    "beach2": "https://chocolatetaiyaki.files.wordpress.com/2015/06/beach21.jpg",
    "hitode": "https://chocolatetaiyaki.files.wordpress.com/2015/06/hitode1.gif",
    
    //3ST
    "sabaku1": "https://chocolatetaiyaki.files.wordpress.com/2015/06/sabaku11.jpg",
    "sabaku2": "https://chocolatetaiyaki.files.wordpress.com/2015/06/sabaku21.jpg",
    "phenix": "https://chocolatetaiyaki.files.wordpress.com/2015/06/phenix.gif",
    
    //4ST
    "jgk1": "https://chocolatetaiyaki.files.wordpress.com/2015/06/jgk1.png",
    "jgk2": "https://chocolatetaiyaki.files.wordpress.com/2015/06/jgk2.png",
    "dragon": "https://chocolatetaiyaki.files.wordpress.com/2015/06/dragon2.png",
    
    "back": "https://chocolatetaiyaki.files.wordpress.com/2015/06/back.png",
    "tw": "https://chocolatetaiyaki.files.wordpress.com/2015/06/tweet1.png",
    "clearBg": "https://chocolatetaiyaki.files.wordpress.com/2015/06/clear1.png",
    "gameoverBg": "https://chocolatetaiyaki.files.wordpress.com/2015/06/clear.png",
    
};

// tm.asset.Loader(function() {
//     // 音
//     tm.sound.SoundManager.add("BGM", "http://jsrun.it/assets/6/2/p/c/62pcZ.mp3", 1);
//     tm.sound.SoundManager.add("SEStoneSelect"  , "http://jsrun.it/assets/s/u/9/G/su9Gu.mp3", 1);
// });

var ENEMY = [ "niwatori" , "hitode" , "phenix", "dragon"];
var BG1 = [ "sougen1", "beach1" , "sabaku1", "jgk1"];
var BG2 = [ "sougen2", "beach2" , "sabaku2", "jgk2"];
var END = [ "gameoverBg", "clearBg"];

//スクリーン・ポジション関連
var SCREEN_WIDTH  = 960;
var SCREEN_HEIGHT = 640;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;
var BUTTON_WIDTH = SCREEN_WIDTH/4;
var BUTTON_HEIGHT = SCREEN_HEIGHT/5;
var BUTTON_COLOR ="pink";
var QLvPt = 0;//問題レベルをセットする変数(0~正解ごとに増加してステージやQLvを設定)
var Lvset;//レベル数が入る変数(1~3までしか入らない)
var STAGE;
var Qcount;
//↑ 総問題数カウント,これもparamに入れられるけど
//this.と煩雑になるのでグローバルでやろうかな…


// //問題文--------------------------------------------------------------
//2018.11.01追記
//もともと.txtから読み込ませていたが、テキストファイルが
//どっかいってしまったのでデモ用に配列で直書き...
var QT_Begginer = [
    ["hasami", "はさみ"], ["umi", "うみ"], ["gakkou", "がっこう"], ["mikan", "みかん"],
    ["baketu", "バケツ"], ["sakura", "さくら"], ["omoti", "おもち"], ["musi", "むし"],
    ["megane", "メガネ"], ["kame", "かめ"], ["sumaho", "スマホ"], ["tomato", "トマト"],
    ["hatena", "hatena"], ["jisyo", "じしょ"], ["tamago", "たまご"], ["obake", "おばけ"],
];
var QT_Middle = [
    ["medamayaki", "目玉焼き"], ["pasokon", "パソコン"], ["natuyasumi", "夏休み"], ["eirian", "エイリアン"],
    ["imonikai", "芋煮会"], ["hokkaidou", "北海道"], ["oyakodon", "親子丼"], ["takkyuu", "卓球"],
    ["waseda", "早稲田"], ["デラックス", "derakkusu"], ["zundamoti", "ずんだもち"], ["redexi", "レディ"],
    ["vanpaia", "ヴァンパイア"], ["janpu", "ジャンプ"], ["oyukagen", "お湯加減"], ["feinto", "フェイント"],
];
var QT_Advanced = [
    ["pbakeyasiki", "お化け屋敷"], ["hokkaidou", "北海道"], ["puroguramingu", "プログラミング"], ["juuissai", "十一歳"],
    ["seisintotokinoheya", "精神と時の部屋"], ["tonarinototoro", "となりのトトロ"], ["omoti", "おもち"], ["musi", "むし"],
    ["kuxidexitti", "クィディッチ"], ["akaikitunetomidorinotanuki", "赤いきつねと緑のたぬき"], ["appurupai", "アップルパイ"], ["syakaikengaku", "社会見学"],
    ["akihabaraeki", "秋葉原駅"], ["doitumokoitumo", "どいつもこいつも"], ["issyuunenkinenbi", "一周年記念日"], ["jukunosensei", "塾の先生"],
];
var QT_Final = [
    ["tonarinokyakuhayokukakikuukyakuda", "隣の客はよく柿食う客だ"], ["toukyoutokkyokyokakyoku", "東京特許許可局"], ["kaerupyokopyokomipyokopyoko", "かえるぴょこぴょこみぴょこぴょこ"], ["akamakigamiaomakigamikimakigami", "赤巻き紙青巻き紙黄巻き紙"],
    ["sumomomomomomomomonouti", "すもももももももものうち"], ["kouhagokigennukagainimairimasitagaminasannogennkidesita", "今日はご機嫌伺いに参りましたがみなさんお元気でした"], ["basugasubakuhatu", "バスガス爆発"], ["namamuginamagomenamatamago", "生麦生米生卵"],
    ["bijutusitugijutusitusyujutusitu", "美術室技術室手術室"], ["miiratorigamiiraninaru", "ミイラ取りがミイラになる"], ["nouarutakahatumewokakusu", "能ある鷹は爪を隠す"], ["nitowooumonohaittowomoezu", "二兎を追うものは一兎をも得ず"],
    ["bousugabyoubunijouzunibouzunoewokaita", "坊主が屏風に上手に坊主の絵を描いた"], ["kikuhaittokinohajikikanuhaissyounohaji", "聞くは一時の恥聞かぬは一生の恥"], ["owariyokerebasubeteyosi", "終わりよければ全て良し"], ["waraukadonihahukukitaru", "笑う角には笑う角には福来たる"],
];

//セットアップ-----------------------------------------------------------
// tm.game.setup({
//     title: "Typing_B(シンプル)",
//     width: 640,
//     height: 960,
// });

tm.main(function() {
// アプリケーション作成
	var app = tm.display.CanvasApp("#world");
	app.resize(SCREEN_WIDTH, SCREEN_HEIGHT); // 画面サイズに合わせる
	app.fitWindow(); // リサイズ対応
	app.background = "#ffffff"; 
 
    var loading = tm.ui.LoadingScene({
    assets: ASSETS,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,        
    });
      
    // 読み込み完了後に呼ばれるメソッドを登録
    loading.onload = function() {
    	app.replaceScene(TitleScene());
    };
    // ローディングシーンに入れ替える
	app.replaceScene(loading);    
	app.run();
});
/*
superClass:のあと…？？？
"tm.scene.~Scene"
"tm.scene.Scene"?
"tm.app.~Scene"
"tm.app.Scene"
"Scene"
これなにが違うの〜〜><
*/
//ゲーム内容--------------------------------------------------------------------
//-----------------------------------------------------------------------------

//     [0]  タイトルシーン

//-----------------------------------------------------------------------------
tm.define("TitleScene", { 
        superClass: "tm.scene.TitleScene", //tm.app.TitleSceneだとエラー
        init: function() {
            this.superInit({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            title: "タイピングゲームA(完成後)",    
            titleSize: 42,
            }),
            
            this.CopylightLabel = tm.display.Label(
                "製作: なでしこ\n素材提供: RPGドット/ぴぽや倉庫/Tsumiru地図素材集"
            ).addChildTo(this)
            .setPosition(100, 550)
            .setFillStyle("#888")
            .setAlign("left")
            .setFontSize(20);
    },
    onpointingstart: function() {
        this.app.replaceScene(MenuScene());
    },
});


//-----------------------------------------------------------------------------

//     [1]  メニューシーン

//-----------------------------------------------------------------------------
tm.define("MenuScene", {
    superClass: "tm.app.Scene",
    
    init: function() {
        this.superInit();
        
        // this.bgm = tm.sound.SoundManager.get("BGM");
        // this.bgm.loop = true;
        // this.bgm.volume = 0.1;
        // this.bgm.play(); 
        
        // bgm 再生
        //tm.asset.AssetManager.get("BGM").play();
        
        var bg = tm.display.Sprite("menuBg").addChildTo(this);
        bg.setOrigin(0, 0);
        
        var waku = tm.display.Sprite( "waku").addChildTo(this);
        waku.setPosition(480, 560);
        waku.tweener.clear()
        .set({
                scaleX: 0,
                scaleY: 1,
            })
        .scale(1);
        
        this.textLabel = tm.display.Label("レベルを選択してください").addChildTo(this);// シーンに追加
        this.textLabel.setPosition(SCREEN_WIDTH/2, 560);
        this.textLabel.fillStyle = "#fff";
        this.textLabel.fontSize = 40;
        this.textLabel.alpha = 0;
        this.textLabel.tweener.clear().wait(1000).fadeIn(100);
        
        //メニューボタン1を生成
        this.mbutton1 = tm.display.Sprite( "Lv1Btn").addChildTo(this);
        this.mbutton1.setInteractive(true);
        this.mbutton1.setPosition(180, 100).setScale(0.8, 0.8);
        this.mbutton1.alpha = 0;
        this.mbutton1.tweener.clear().fadeIn(200);
        // 押下時の処理       
        this.mbutton1.addEventListener("pointingstart", function(){
            Lvset = 1;
            Qcount = 10;
            QLvPt = 0;
            STAGE = 0;
            //this.pressedBtn();
            this.app.replaceScene(GameScene());
        }.bind(this));
        
        //メニューボタン2を生成
        this.mbutton2 = tm.display.Sprite("Lv2Btn").addChildTo(this);
        this.mbutton2.setInteractive(true);
        this.mbutton2.setPosition(800,350).setScale(0.8, 0.8);
        this.mbutton2.alpha = 0;
        this.mbutton2.tweener.clear().wait(200).fadeIn(200);
        // 押下時の処理       
        this.mbutton2.addEventListener("pointingstart", function(){
            Lvset = 2;
            Qcount = 15;
            QLvPt = 4;
            STAGE = 1;
            this.app.replaceScene(GameScene());
        }.bind(this));
        
         //メニューボタン3を生成
        this.mbutton3 = tm.display.Sprite( "Lv3Btn").addChildTo(this);
        this.mbutton3.setInteractive(true);
        this.mbutton3.setPosition(250,400).setScale(0.8, 0.8);
        this.mbutton3.alpha = 0;
        this.mbutton3.tweener.wait(400).fadeIn(200);
        // 押下時の処理       
        this.mbutton3.addEventListener("pointingstart", function(){
            Lvset = 3;
            Qcount = 20;
            QLvPt = 10;
            STAGE = 2;//2
            this.app.replaceScene(GameScene());
        }.bind(this));
        
        this.mbutton4 = tm.display.Sprite( "Lv4Btn").addChildTo(this);
        this.mbutton4.setInteractive(true);
        this.mbutton4.setPosition(480, 170).setScale(1.2, 1.2);
        this.mbutton4.alpha = 0;
        this.mbutton4.tweener.wait(600).fadeIn(400);
        // 押下時の処理       
        this.mbutton4.addEventListener("pointingstart", function(){
            Lvset = 4;
            Qcount = 25;
            QLvPt = 16;
            STAGE = 3;//3
            this.app.replaceScene(GameScene());
        }.bind(this));
        
        
        this.hajimeniBtn =  tm.app.FlatButton({
            width: 200, 
            height: BUTTON_HEIGHT/2, 
            text: "はじめに",
            fillStyle: "rgba(70 ,130, 180, 0.7)",
        }).addChildTo(this);
        this.hajimeniBtn.setPosition(830, 60);
        this.hajimeniBtn.label.setFontSize(28);
        this.hajimeniBtn.label.fillStyle = "#fff";
        this.hajimeniBtn.alpha = 0;
        this.hajimeniBtn.tweener.fadeIn(200);
        // 押下時の処理       
        this.hajimeniBtn.addEventListener("pointingstart", function(){
            this.app.pushScene(HajimeniScene());
        }.bind(this));
    },
    
    // update: function(app){
    //     if( app.pointing.x <=320 && app.pointing.y <=320 ) {
    //         this.mbutton1.tweener.clear().scale(0.8).set({scaleX: 1.2,scaleY: 1.2});
    //         this.mbutton2.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton3.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton4.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
            
    //     }else if(app.pointing.x <=320 && app.pointing.y >=320){
    //         this.mbutton1.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton2.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton3.tweener.clear().scale(0.8).set({scaleX: 1.2,scaleY: 1.2});
    //         this.mbutton4.tweener.clear().scale(0.8).set({scaleX: 0.6,scaleY: 0.6});
            
    //     // }else if(app.pointing.x >=320 && app.pointing.y >=320){
    //     //     this.mbutton1.tweener.clear().set({scaleX: 0.8,scaleY: 0.8});
    //     //     this.mbutton2.tweener.clear().set({scaleX: 1.2,scaleY: 1.2});
    //     //     this.mbutton3.tweener.clear().set({scaleX: 0.8,scaleY: 0.8});
    //     //     this.mbutton4.tweener.clear().set({scaleX: 0.8,scaleY: 0.8});
        
    //     }else if((app.pointing.x >=320 && app.pointing.x <=640) && app.pointing.y <=320){
    //         this.mbutton1.tweener.clear().scale(1).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton2.tweener.clear().scale(1).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton3.tweener.clear().scale(1).set({scaleX: 0.6,scaleY: 0.6});
    //         this.mbutton4.tweener.clear().scale(1).set({scaleX: 1.2,scaleY: 1.2});
            
    //     }
    
    //},
    
    pressedBtn: function() {
        this.setInteractive(false);
        //var self = this;
        this.mbutton1.tweener
            .clear()
            .to({scaleX:0}, 100)
            .call(function() {
                this.mbutton1.setFillStyle("rgb(100, 100, 100)");
            }.bind(this))
            .to({scaleX:1, alpha:0.5}, 100);
    }
});


//-----------------------------------------------------------

//[1]  ゲームシーン

//-----------------------------------------------------------
tm.define("GameScene",{
	//(1)
	superClass: "tm.app.Scene",
	
	//(2)コンストラクタ
    init: function() {
        //Initメソッド（初期化）を継承
        this.superInit();
        
    // 変数たち
        //bgm
        //tm.asset.AssetManager.get("bgm").play();
        
        //なんでかthis.なんだよなーvarじゃなくて><
        this.missType = 0;
        this.bonus = 0;
        this.type = 0;
        this.begScore = 0; this.midScore = 0; this.adScore = 0;
        
        
    // スプライトシートの設定
        //PlayerSpriteSheet = playerSpriteSheet;
        //EnemySpriteSheet = enemySpriteSheet;
        this.playerSpriteSheet = tm.asset.SpriteSheet({
            image: "player",
            frame: {
                "width": 16,
                "height": 31,
                "count": 32
            },
            animations: {
                "left": {
                    frames: [4, 5, 4, 3],
                    next: "left",
                    frequency: 4
                },
                "right": {
                    frames: [7, 8, 7, 6],
                    next: "right",
                    frequency: 4
                },
                "front": {
                    frames: [1, 2, 1, 0],
                    next: "front",
                    frequency: 4
                },
                "back": {
                    frames: [10, 11, 10, 9],
                    next: "back",
                    frequency: 4
                },
                "roll": {
                    frames: [1, 2, 3, 4, 5, 9, 10, 11, 8, 7, 6, 0],
                    next: "roll",
                    frequency: 3
                },
            }
        });
        if(STAGE < 2){
            this.enemySpriteSheet = tm.asset.SpriteSheet({
                image: ENEMY[STAGE],
                frame: {
                    "width": 40,
                    "height": 64,
                    "count": 40
                },
                animations: {
                    "walk": {
                        frames: [1, 2, 0],
                        next: "walk",
                        frequency: 4
                    }
                }
            });
        }else if(STAGE == 2){
                this.enemySpriteSheet = tm.asset.SpriteSheet({
                image: ENEMY[STAGE],
                frame: {
                    "width": 122,
                    "height": 174,
                    "count": 100
                },
                animations: {
                    "walk": {
                        frames: [1, 2, 3, 4, 5, 0],
                        next: "walk",
                        frequency: 4
                    }
                }
            });
        }else if(STAGE == 3){
                this.enemySpriteSheet = tm.asset.SpriteSheet({
                image: ENEMY[STAGE],
                frame: {
                    "width": 180,
                    "height": 104,
                    "count": 180
                },
                animations: {
                    "walk": {
                        frames: [2, 3, 4, 5, 0, 1],
                        next: "walk",
                        frequency: 4
                    }
                }
            });
        }
        
        
    // 背景スクロール,キャラ生成
        
        var GROUND_LINE = 480;
        var SCROLL_SPEED = 8 + Lvset*2;   // スクロールの速さ(固定)
        
        // 背景1
        this.bg1 = tm.display.Sprite( BG2[STAGE] ,SCREEN_WIDTH+10, SCREEN_HEIGHT).addChildTo(this);
        this.bg1.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);//画像の真ん中の座標
        //背景2
        this.bg2 = tm.display.Sprite( BG1[STAGE] ,SCREEN_WIDTH+10, SCREEN_HEIGHT).addChildTo(this);
        this.bg2.setPosition(-SCREEN_CENTER_X, SCREEN_CENTER_Y);
        
        // プレイヤー
        this.player = tm.app.AnimationSprite(this.playerSpriteSheet);
        this.player.gotoAndPlay("left");
        this.player.setPosition(SCREEN_CENTER_X/2, GROUND_LINE).setScale(3, 3);
        this.addChild(this.player);
        
        //敵
        this.enemy = tm.app.AnimationSprite(this.enemySpriteSheet);
        this.enemy.gotoAndPlay("walk");
        if(STAGE < 2){
            this.enemy.setPosition(SCREEN_CENTER_X*3/2, GROUND_LINE-40).setScale(3, 3);
        }else if(STAGE >= 2){
            this.enemy.setPosition(SCREEN_CENTER_X*3/2, GROUND_LINE-90).setScale(STAGE, STAGE);
            //画像の大きさを揃えてないのでこの辺で無理やり調整ｗ
        }
        this.addChild(this.enemy);
        
        // 毎フレームイベントをシーンに追加
        this.addEventListener("enterframe", function(){
            // 背景をスクロールさせる
            this.bg1.x += SCROLL_SPEED;         // 背景1をスクロール
            this.bg2.x += SCROLL_SPEED;         // 背景2をスクロール
            if (this.bg1.x >= SCREEN_CENTER_X*3) {            // 背景1が画面外に出たら
                this.bg1.x = -SCREEN_CENTER_X;              // 画面左端に移動
            }
            if (this.bg2.x >= SCREEN_CENTER_X*3) {            // 背景2が画面外に出たら
                this.bg2.x = -SCREEN_CENTER_X;              // 画面左端に移動
             }
        });
    
    
    //ラベルたち
        
        //タイマー
        //タイマー初期設定
        this.time = 6*1000;//time初期設定
        this.currentIndex = 1;//シーンインデックスのgetter
        
        var timerLabel = tm.display.TextShape({text: "  "}).addChildTo(this);
        //TextShapeにすると初期設定?がhello,worldらしくてそれが表示されちゃうのがいや故"  "
        timerLabel.setPosition(SCREEN_CENTER_X, SCREEN_HEIGHT*1/5);
        timerLabel.fillStyle = "#222";
        timerLabel.fontSize = 64;
        timerLabel.strokeStyle = "white";//TextShape用
        timerLabel.lineWidth = 4;//TextShape用
        
        this.timerLabel = timerLabel;
        
        //日本語
        this.descriptionLabel = tm.display.Label("Sprite").addChildTo(this);
        this.descriptionLabel.fillStyle = "#222";
        if(STAGE<=2){
            this.descriptionLabel.fontSize = 64;
            this.descriptionLabel.setPosition(SCREEN_CENTER_X,SCREEN_HEIGHT*2/5);
        }else{
            this.descriptionLabel.fontSize = 54;
            this.descriptionLabel.setPosition(SCREEN_CENTER_X,SCREEN_HEIGHT*1.8/5);
        }
        
        //ローマ字
        this.currentLabel = tm.display.TextShape().addChildTo(this);
        this.currentLabel.width = SCREEN_WIDTH;
        this.currentLabel.fontSize = 32;
        this.currentLabel.fillStyle = "#222";
        this.currentLabel.setStrokeStyle("rgba(255, 255, 255, 0.7)"); //TextShape用
        this.currentLabel.lineWidth = 6; //TextShape用
        if(STAGE<=2){
            this.currentLabel.setPosition(SCREEN_CENTER_X,SCREEN_HEIGHT*2.6/5);
        }else{
            this.currentLabel.setPosition(SCREEN_CENTER_X,SCREEN_HEIGHT*2.8/5);
        }
        
        //ミスタイプ
        this.MissLabel = tm.display.Label().addChildTo(this);
        this.MissLabel.setPosition(100, 50);
        this.MissLabel.fillStyle = "#222";
        this.MissLabel.fontSize = 32;
        
        //ボーナス
        this.bonusLabel = tm.display.Label().addChildTo(this);
        this.bonusLabel.setPosition(200, 50);
        this.bonusLabel.fillStyle = "#222";
        this.bonusLabel.fontSize = 32;
        
    //問題設置
        //QLvPt += Lvset*3;  //初期問題はQLv(0)+Lv*3の問題
        //Lv1: QLvPt 0~ (Bigginer)
        //Lv2: QLvPt 4~ (Bigginer)
        //Lv3: QLvPt 10~ (Middle)
        //Lv4: QLvPt 16~ (Advanced)
        this.setQuestion(QLvPt);
    },

    
    //(3)始めるよカウントダウン画面
    onenter: function() {
        this.app.pushScene(CountdownScene({
             width: SCREEN_WIDTH,
             height: SCREEN_HEIGHT,
        }));
    },
    
    
	
	//(4)更新する設定
    update: function(app) {
    
    //タイマー
        this.time -= app.deltaTime;
        var sec = this.time/1000;//カウントダウンできた！
        this.timerLabel.text = sec.floor();//表示
        
    
    //キーボード関連
        var key = app.keyboard;
        var moji = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u','v','w','x','y','z'];
        
        var text = this.currentLabel.text;           //text = 問題文
        var ch = text[0].toLowerCase();              //ch = text(=問題文)の0個目の要素
        var chEXC = moji.erase(ch);                  //chEXC = mojiからch要素を消した配列
        
        
            if (key.getKeyDown(ch)) {                    //if(ch=問題文0個目)のキーを押したら
                // SoundManager.play("type");
                this.currentLabel.text = text.substr(1); //問題文=問題文1文字減
                this.type++;
                //console.log(this.type);
            }
            for(var i=0; i<25; i++){                         //iを0~25番目まで回してchEXCを全部調べる
                if(key.getKeyDown(chEXC[i])){                //if(chEXCのi番目キーを押したら)
                    this.missType++;
                    this.type++;
                    //console.log(this.type);
                }
            }
        this.MissLabel.text = "Miss\n" + this.missType;
        
        
    //正解不正解処理
        //時間内に正解
        if (this.currentLabel.text.length <= 0) {
            if(this.time >= 3*1000 ){ //時間内に正解かつ3秒以上残っていたらボーナス＋１
                this.bonus++;
            }
            //tm.asset.AssetManager.get("pinponSE").clone().play();
            this.enemy.x += (30 + Lvset*5);
            if(QLvPt <= 5){               this.begScore++; }
            if(6 <= QLvPt && QLvPt <= 12){ this.midScore++; }
            if(13 <= QLvPt){               this.adScore++; }
            
            //console.log("正答数: " + (this.begScore+this.midScore+this.adScore));
            //console.log("問題レベルポイント " + QLvPt);
            //console.log("問題数:" + Qcount);
            
            QLvPt++;
            this.setQuestion(QLvPt);
            this.time = 6*1000;
        }
        this.bonusLabel.text = "Bonus\n" + this.bonus;
        
        
        //時間切れ
        if (this.time <= 1*100) {
            //QLvPt--;(ミドル→ビギナーに後戻りさせるならQLvPt減らす必要あり、今は後戻りさせない)
            
            //console.log("正答数: " + (this.begScore + this.midScore + this.adScore));
            //console.log("問題レベルポイント " + QLvPt);
            //console.log("問題数:" + Qcount);
            
            this.setQuestion(QLvPt);
            this.time = 6*1000;
        }//2つに分けないとアニメーションが続かない
        if(this.time <= 1*1000 && this.time >= 0){
            //tm.asset.AssetManager.get("booSE").clone().play();
            this.enemy.x -= (3 + Lvset*2);
        }
        
        
        //プレイヤより敵のx座標が小さくなったらゲームオーバー→EndSceneへ
        if(this.enemy.x <= this.player.x){
            app.pushScene(EndScene({ //正答数・ボーナス・ミスタイプを渡してエンドシーンへ
                begScore: this.begScore,
                midScore: this.midScore,
                adScore: this.adScore,
                type: this.type,
                bonus: this.bonus,
                missType: this.missType,
            }));
        }
        
    
    //問題数が0以下になったらクリア
        if(Qcount < 0){
            //tm.asset.AssetManager.get("clearSE").clone().play();
            app.pushScene(EndScene({ //正答数・タイプ数・ボーナス・ミスタイプを渡してエンドシーンへ
                begScore: this.begScore,
                midScore: this.midScore,
                adScore: this.adScore,
                type: this.type,
                bonus: this.bonus,
                missType: this.missType,
            }));
        }
        
    },
	
	//(5)
    setQuestion: function(QLvPt){
        var q;//増加するQLvPtに応じて出す問題変える
        //QLvPt: ~5 Bigginer
        //QLvPt: 6~12 Middle
        //QLvPt: 13~19 Advanced
        //QLvPt: 20~ Final
        
        // if(QLvPt <= 5){ q = QT_Begginer.pickup(); }
        // if(6 <= QLvPt && QLvPt <= 12){ q = QT_Middle.pickup(); }
        // if(13 <= QLvPt && QLvPt <= 19){ q = QT_Advanced.pickup(); }
        // if(20 <= QLvPt){ q = QT_Final.pickup(); }
        //2018.11.01追記
        if(QLvPt <= 5){ q = this.pickup(QT_Begginer); }
        if(6 <= QLvPt && QLvPt <= 12){ q = this.pickup(QT_Middle); }
        if(13 <= QLvPt && QLvPt <= 19){ q = this.pickup(QT_Advanced); }
        if(20 <= QLvPt){ q = this.pickup(QT_Final); }
       
        // this.currentLabel.text = q.word;
        this.currentLabel.text = q[0];
        this.currentLabel.alpha = 0;
        this.currentLabel.tweener.clear().fadeIn(150);
        
        // this.descriptionLabel.text = q.description;
        this.descriptionLabel.text = q[1];
        this.descriptionLabel.alpha = 0;
        this.descriptionLabel.tweener.clear().fadeIn(150);
        
        //問題設置ごとに問題数カウントを減らす
        Qcount--;
        
    },
    
    //(6)
    onpointingstart: function() {
        this.showPause();
    },
    
    //(7)
    showPause: function() {
        var scene = PauseScene();
        this.app.pushScene(scene);
    },
    
    //2018.11.01追記
    //問題文の配列からランダムに問題選択する関数
    pickup: function(quesArray){
        var questionRow = tm.util.Random.randint(0, quesArray.length-1);
        
        var questionWord = quesArray[questionRow][0];
        var questionDescription = quesArray[questionRow][1];
        var pickedupQuestion = [questionWord, questionDescription];
        
        return pickedupQuestion;
    },
    
    
}//{(1)~(7)}
);


//-----------------------------------------------------------

// [2]  ポーズシーン

//-----------------------------------------------------------
tm.define("PauseScene", {
    superClass: "tm.app.Scene",
    
    init: function() {
        this.superInit();
        
        var bg = tm.display.Shape({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            bgColor: "rgba(0, 0, 0, 0.5)",
        }).addChildTo(this);
        bg.setOrigin(0, 0);
        
        var label = tm.display.Label().addChildTo(this);
        label.setPosition( SCREEN_CENTER_X, SCREEN_CENTER_Y );
        label.fontSize = 64;
        label.text = 'PAUSE';
    },
    
    onpointingstart: function() {
        this.exit();
    }
});



//-----------------------------------------------------------

// [3] エンドシーン

//-----------------------------------------------------------
tm.define("EndScene", {
    superClass : "tm.app.Scene",

    init : function(param) {
        this.superInit();
        
        
        //背景ベタの場合
        var bgC;
        var Comment;
        if(Qcount>0){
            bgC ="#000";
            fontC = "#fff";
            Comment = "GAME OVER !!";
        }else{
            bgC = "#fff";
            fontC = "#000";
            Comment = "Clear !!";
        }
        //背景
        var bg = tm.display.Shape({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            bgColor: bgC,
        }).addChildTo(this);
        bg.alpha = 0;
        bg.tweener.clear().fadeIn(800);
        bg.setOrigin(0, 0);
        
        
        //背景画像の場合こっち（現在クリアのみ）
        
        // var bg;
        // var Comment;
        // if(Qcount>0){
        //     bg = 0;
        //     fontC = "#000";
        //     Comment = "GAME OVER !!";
        // }else{
        //     bg = 1;
        //     fontC = "#000";
        //     Comment = "Clear !!";
        // }
        
        // var bgImg = tm.display.Sprite(END[bg]).addChildTo(this);
        // bgImg.alpha = 0;
        // bgImg.tweener.clear().fadeIn(800);
        // bgImg.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);
        
        // var bgSquare = tm.display.Shape({
        //     width: SCREEN_WIDTH/2,
        //     height: 360,
        //     bgColor: "rgba(255, 255, 255, 0.7)",
        // }).addChildTo(this);
        // bgSquare.alpha = 0;
        // bgSquare.tweener.clear().wait(800).fadeIn(800);
        // bgSquare.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);
        
        //背景画像の場合こっち　ここまで
        
        
        
        var titleLabel = tm.display.Label().addChildTo(this);
        titleLabel
            .setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y*2/8)
            .setFontSize(64)
            .setFillStyle(fontC)
            .setAlpha(0)
            //.tweener.clear().wait(200).fadeIn(200);
            .tweener.clear().wait(200).fadeIn(1000).wait(200).fadeOut(500).setLoop(true);//ちかちか
        titleLabel.text = Comment;
        
        
        
        //得点
        
        var typeLabel = tm.display.Label().addChildTo(this);
        typeLabel
            .setPosition(SCREEN_CENTER_X+200, 180)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(2100).fadeIn(500);
        typeLabel.text = "タイプ数  : " + param.type + "文字 × 2点  = " + param.type*2 + "点\n";
        
        var trueLabelBeg = tm.display.Label().addChildTo(this);
        trueLabelBeg
            .setPosition(SCREEN_CENTER_X+200, 220)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(2300).fadeIn(500);
        trueLabelBeg.text = "正答   : 初級" + param.begScore + "問 × 10点  = " + param.begScore*10 + "点\n";
        
        var trueLabelMid = tm.display.Label().addChildTo(this);
        trueLabelMid
            .setPosition(SCREEN_CENTER_X+200, 250)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(2500).fadeIn(500);
        trueLabelMid.text = "中級" + param.midScore + "問 × 20点  = " + param.midScore*20 + "点\n";
        
        var trueLabelAd = tm.display.Label().addChildTo(this);
        trueLabelAd
            .setPosition(SCREEN_CENTER_X+200, 280)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(2700).fadeIn(500);
        trueLabelAd.text =  "上級" + param.adScore  + "問 × 30点  = " + param.adScore*30  + "点\n";
        
        
        var bonusLabel = tm.display.Label().addChildTo(this);
        bonusLabel
            .setPosition(SCREEN_CENTER_X+200, 320)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(2800).fadeIn(500);
        bonusLabel.text = "ボーナス :  " + param.bonus + "回 × 50点 = " + param.bonus*50 + "点\n";
        
        
        var missLabel = tm.display.Label().addChildTo(this);
        missLabel
            .setPosition(SCREEN_CENTER_X+200, 350)
            .setFontSize(24)
            .setFillStyle(fontC)
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(3100).fadeIn(500);
        missLabel.text = "タイプミス : " + param.missType + "回 × -1点 = " + param.missType*(-1) + "点\n";
        
        
        var scoreLabel = tm.display.Label().addChildTo(this);
        var allScore = param.type*2 + param.begScore*10 + param.midScore*20 + param.adScore*30 + param.bonus*50 + param.missType*(-1);
        scoreLabel
            .setPosition(SCREEN_CENTER_X, 440)
            .setFontSize(64)
            .setFillStyle(fontC)
            .setAlpha(0)
            .tweener.clear().wait(3700).fadeIn(1200);
        scoreLabel.text = "スコア: " + allScore + "点\n";
        
        
        var backBtn = tm.display.Sprite( "back").setPosition(800, 560).addChildTo(this);
            backBtn
                .setAlpha(0)
                .tweener.clear().wait(4600).fadeIn(500);
            backBtn.setInteractive(true);
            backBtn.addEventListener("pointingstart", function(){
                QLvPt  = 0;
                param = 0;
                // param.begScore = 0; param.midScore = 0; param.adScore = 0;
                // param.missType = 0; param.bonus = 0;
                //多分これでparam内全て初期化されてるんだろうけど…バグ出たらちゃんと全部書く
                this.app.replaceScene(MenuScene());
            }.bind(this));
        
        var twBtn = tm.display.Sprite("tw").setPosition(180, 560).addChildTo(this);
            twBtn
                .setAlpha(0)
                .tweener.clear().wait(4600).fadeIn(500);
            twBtn.setInteractive(true);
            twBtn.addEventListener("pointingstart", function(){
                var twitterURL = tm.social.Twitter.createURL({
                type    : "tweet",
                text    : "タイピングゲームやりました. Score:" +  allScore,
                hashtags: "tmlib, javascript",
                url     : "http://tmlib.js", // or window.document.location.href
            });
            window.open(twitterURL, 'share window', 'width=400, height=300');
            }.bind(this));
    },
    
});




//-----------------------------------------------------------

// [3] カウントダウンシーン (フラットデザイン作ってみたtmblogの丸パクリ)

//-----------------------------------------------------------
tm.define("CountdownScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
        var self = this;
 
        var filter = tm.app.Shape(SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(this);
        filter.origin.set(0, 0);
        filter.canvas.clearColor("rgba(250, 250, 250, 0)");
 
        var label = tm.app.Label().addChildTo(this);
        label
            .setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y)
            .setFillStyle("#000")
            .setFontSize(240)
            .setAlign("center")
            .setBaseline("middle");
 
        label.tweener
            .set({
                scaleX: 0.3,
                scaleY: 0.3,
                text: "Ready"
            })
            .scale(0.4)
            .set({
                scaleX: 0.7,
                scaleY: 0.7,
                text: " GO! " 
            })
            .scale(1)
            .call(function() {
                self.app.frame = 0;
                self.app.popScene();
            });
    },
});


//-----------------------------------------------------------

// [3] はじめにシーン

//-----------------------------------------------------------
tm.define("HajimeniScene", {
    superClass: "tm.app.Scene",
 
    init: function() {
        this.superInit();
        
        this.bg1 = tm.display.Sprite( BG2[0] ,SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(this);
        this.bg1.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);
        
        var bg = tm.display.Shape({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            bgColor: "rgba(255, 255, 255, 0.5)",
        }).addChildTo(this);
        bg.alpha = 0;
        bg.tweener.clear().fadeIn(600);
        bg.setOrigin(0, 0);
        
        var titleLabel = tm.display.Label().addChildTo(this);
        titleLabel
            .setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y*2/8)
            .setFontSize(64)
            .setFillStyle("#000")
            .setAlpha(0)
            .tweener.clear().wait(300).fadeIn(200);
        titleLabel.text = "はじめに";
        
        var explainLabel1 = tm.display.Label().addChildTo(this);
        explainLabel1
            .setPosition(SCREEN_CENTER_X-400, 175)
            .setFontSize(36)
            .setFillStyle("#000")
            .setAlign("left")
            .setAlpha(0)
            .tweener.clear().wait(500).fadeIn(500);
        explainLabel1.text = "＊正答… 時間内にタイプ終了  :";
        
        var explainLabel2 = tm.display.Label().addChildTo(this);
        explainLabel2
            .setPosition(SCREEN_CENTER_X+350, 175)
            .setFontSize(36)
            .setFillStyle("#000")
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(500).fadeIn(500);
        explainLabel2.text = "初級 1問  10点\n中級 1問  20点\n 上級 1問  30点";
        
        var explainLabel3 = tm.display.Label().addChildTo(this);
        explainLabel3
            .setPosition(SCREEN_CENTER_X-400, 310)
            .setFontSize(36)
            .setFillStyle("#000")
            .setAlign("left")
            .setAlpha(0)
            .tweener.clear().wait(500).fadeIn(500);
        explainLabel3.text = "＊ボーナス … 3秒以上残して\n";
        
        var explainLabel4 = tm.display.Label().addChildTo(this);
        explainLabel4
            .setPosition(SCREEN_CENTER_X+350, 355)
            .setFontSize(36)
            .setFillStyle("#000")
            .setAlign("right")
            .setAlpha(0)
            .tweener.clear().wait(500).fadeIn(500);
        explainLabel4.text = "タイプ終了        :      1回 50点\n";
        
        var explainLabel5 = tm.display.Label().addChildTo(this);
        explainLabel5
            .setPosition(SCREEN_CENTER_X-400, 420)
            .setFontSize(36)
            .setFillStyle("#000")
            .setAlign("left")
            .setAlpha(0)
            .tweener.clear().wait(500).fadeIn(500);
        explainLabel5.text = "＊タイプミス   …                          1回 -1点\n\n＊画面をクリックでポーズ";
        
        
        this.ModoruBtn =  tm.app.FlatButton({
            width: BUTTON_WIDTH*1.5, 
            height: BUTTON_HEIGHT/2, 
            text: "メニューに戻る",
            fillStyle: "rgba(0, 0, 0, 0.5)",
        }).addChildTo(this);
        this.ModoruBtn.position.set(SCREEN_CENTER_X+280, SCREEN_HEIGHT*9/10);
        this.ModoruBtn.label.setFontSize(34);
        this.ModoruBtn.label.fillStyle = "#fff";
        this.ModoruBtn.alpha = 0;
        this.ModoruBtn.tweener.wait(1000).fadeIn(500);
        // 押下時の処理       
        this.ModoruBtn.addEventListener("pointingstart", function(){
            this.app.pushScene(MenuScene());
        }.bind(this));
    },
});
