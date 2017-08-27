"use strict";

Talks.npcs = {
    "charles": {
        "default": {
            "male": [
                "嘿，伙计！",
                "我是当地帝国总理府的秘书查尔斯，我也是在这些地方的帝国的官方大使。",
		"你可以休息一下，在这个地方交易你所需的。",
		"这里有各种各样的人，所以我是一个秩序维持员。",
                "来来来，我们好好谈谈。"
            ],
            "female": [
                "祝你一天好心情，小姐！",
                "我是地方帝国政府的秘书，查尔斯，我也是在这些地方的帝国的官方大使。",
		"你可以休息一下，在这个地方交易你所需的。",
		"这里有各种各样的人，所以我是一个秩序维持员。",
                "来来来，我们好好谈谈。"
            ]
        },
        "empire": {
            "male": [
                "很高兴再次见到你，我的朋友！",
                "看到你仍然忠于皇帝，即使如此，你也不会失去对上帝的信仰，而不是被盟友的甜言蜜语一起被迷住...保持这个，朋友！上帝帮助我，如果我可以，我不会不帮你。",
            ],
            "female": [
                "很高兴见到你，女士们！",
                "我很高兴你没有离开帝国范围，我希望你能留在我们身边，城市缺乏真诚、开明的女孩，我是你的仆人和忠诚的骑士，如果有要求，我一定会帮你"
            ]
        },
        "confederation": {
            "male": [
                "你好，孩子",
                "这是怎么回事，我的意思是，你的奉献至少可以帮助你，至少我们可以养活你，我们在这里平等，所以我不能爱那些不属于我们的人，我会真诚地帮助你。",
            ],
            "female": [
                "你好，小姑凉",
                "有什么问题带给你困扰吗？我很抱歉你加入了这个死胡同，但不要担心，我们的关系不会改变，你必须有理由这样做，我不会判断这一切是平等的，但是我希望你会选择一个更温和的方式，无论如何，查尔斯是你的仆人。",
            ]
        },
        "actions": {
            "Set citizenship": "我想设定我的派别",
            "Get claim": "我想要一份土地契约（10铂金）",
        },
    },
    "diego": {
        "default": {
            "male": [
		"嗨，我的名字是迭戈，我是Taiterrad的大使，但是我比那些政客好相处，我喜欢玩这个游戏，所以如果你想狩猎，我可以教你！"
	    ],
        },
        "actions": {
            "Show instances": "显示我在哪里。",
        }
    },
    "scrooge": {
        "default": {
            "male": [
                "欢迎你!",
                "我们总是乐意看到新客户，坐下来，我叫斯科罗吉，我管理着最伟大的Rogalia银行，",
                "我们的银行是如此之大，即使是如此偏远的城镇也能找到我们的办事处，不要担心我们的服务质量是一样的。",
                "我可以保存你的钱，你不必担心，我会保证它们的安全。",
                "而且，对于储户来说，我们可以提供储蓄基金服务，如果你有一定的收入，所有的收入都会自动保存在你的账户里，利润很高，没有额外的账单。",
                "所以，还有什么问题?"
            ]
        },
        "actions": {
            "Bank": "金融业务",
            "Exchange": "锭和票据交易",
        },
    },
    "sabrina": {
        "default": {
            "male": [
                "停！不要啊！我们呃...啊哈哈...好吧，啊，对不起，我是萨布里娜，我是当地的炼金术士。 一切为您服务：从将草变成天鹅到到将石头复活的药水！ 嘻嘻，只是在开玩笑。"
            ],
	        "female": [
		        "等等，不要过来！（咔咔咔）…好了，不废话了。我的名字叫萨布里娜，我是本地的炼金术士。从会动的呱太到电脑配件应有尽有！呵呵，开玩笑的。"
	        ]
        },
        "actions": {
            "Trade": "我想看一下",
        },
    },
    "larisa": {
        "default": {
            "male": [
                "欢迎来到Rogalia的交易中心！嗯，我们只是皇家拍卖行的本地分店，但你们我们并没有变得更糟！我是Larice，如果你想交易，就找我。"
            ]
        },
        "actions": {
            "Auction": "我想看一看",
            "Get vendor license": "我想取得交易许可证"
        },
    },
    "shot": {
        "default": {
            "male": [
                "你好，帅哥，我正忙，先坐吧。",
                "看看我们的酒吧！\"狼性涌动\"是唯一值得关注的地方，无论是你从查尔斯那听到了什么。我们在隔壁房间里都有冷水，温暖的食物和非常热的东西（单纯脸），希望你喜欢！",
            ],
            "female": [
                "你好，美女！",
                "我是肖特，我经营着这家 \"狼性涌动\" 酒吧，我们有肉有酒，还有别的好东西哦出于直觉，我觉得我们能发展一段美好的关系!",
            ]
        },
        "empire": {
            "male": [
                "这位贵族绅士今天想要什么样的美餐？",
                "我们的食材都是百分百纯天然无污染的！我们\"狼性涌动\"酒吧是一个本土酒吧，会给你不同于大都市大酒店的体验！我是肖特，我是你的仆人",
            ],
            "female": [
                "啊！欢迎小姐来我们进餐！",
                "嗯，希望我会满足你的期望，我们的食材都是百分百纯天然无污染的！\
					您可以用高脚杯享受红酒，说不定会有绅士为您买单哦！"
            ]
        },
        "confederation": {
            "male": [
                "嗨，亲爱的，我是肖特，坐吧。",
                "看看我们的酒吧！\"狼性涌动\"是唯一值得关注的地方，无论是你从查尔斯那听到了什么。我们在隔壁房间里都有冷水，温暖的食物和非常热的东西（单纯脸），希望你喜欢！",
            ],
            "female": [
                "嘿嘿，很高兴在这里看到联邦的另一个女儿！",
                "\"狼性涌动\"不是那么糟，对吗？更多的时候，我相信我们会成为好朋友，顺便说一句，我是肖特，我可以下面给你吃，交换一些种子，而且，你知道...嗯，如果你有足够的开放的话，你可能会在隔壁房间里找到有趣的东西。",
            ]
        },
        "actions": {
            "Trade": "我想看看你有什么。",
            "Drink water": "我要喝一杯（5银）",
        }
    },
    "margo": {
        "default": {
            "male": [
                "嘿，亲爱的，不要只是经过！",
		"来吧，让我们做些好玩的事吧！你知道我是谁，不是吗？我知道你像我这样的人称呼，但我更喜欢\"夜蝴蝶\"这个词，因为我看起来像蝴蝶，柔软的翅膀，轻盈的身材，傲人的胸伟。我给人们乐趣，特别的快乐。所以，这位帅哥还不快来？",
            ],
            "female": [
                "亲爱的，走错门了吗？",
		"来吧，不要害羞，我已经读懂你眼中的一切，不要再说了，我是玛格，我是你所需要的，相信我，我可以看到紧张和保留;你来到正确的地方，我们会做好玩的事。一个女人应该做自己，向世界展现自己，让无聊的想法离开。亲爱的，坐下来，我不咬人。",
            ]
        },
        "empire": {
            "male": [
                "来吧，别害羞。",
		"嗯，如果你在这里，认为你知道我是玛格，我的服务是非常特别的，休息一下，休息一下，你需要休息吗，不是吗？我认识你，勇敢的战士啊，扔掉你的怀疑，让自己快乐.....",
            ],
            "female": [
                "有什么是我能帮助你的吗？",
		"玛格，就是我，一个妓女，一个妓女，如果你愿意，有什么问题吗？我看到你有问题，任何男人会有这样的情况...哦，我可以看到你的眼睛里的激情。我的上帝，原谅我的无礼，这个地方有点不稳定，你知道的，查尔斯说，帝国和联邦将永远敌对，即使我们在沙漠的岛上，但是不用担心，我忠于所有的客户，我会帮你摆脱你的压力"
            ]
        },
        "confederation": {
            "male": [
                "好，来吧，别害羞。",
		"哇，这样的激情！你看起来好雄壮啊，你的步伐让我的双腿颤抖！我想你是有求而来的，你应该知道该怎么做，对吗？你可以叫我玛格或任何你喜欢的，来吧……",
            ],
            "female": [
                "进来，小可爱，玛格总是很高兴看到像你这样可爱的女孩。",
		"在这个充满汗水和油腻生锈的帝国，每个女孩都需要休息和享乐，需要释放她的紧张，对我来说，像我这样的人给他们想要的东西，你想和我在一起，让玛格照顾你...“",
            ]
        },
        "actions": {
            "Buy sex": "大保健（10金）",
        }
    },
    "bruno": {
        "default": {
            "male": [
                "欢迎来到鄙店，朋友",
		"我是布鲁诺，很高兴帮你挑选一件衣服，你在这里为了衣服，对吗？我是整个帝国最好的裁缝，我会帮助你。",
            ],
            "female": [
                "亲，走过路过不要错过！",
		"我的名字是布鲁诺，亲，这是我的商店，你可以在这里买到任何衣服，包邮哦！",
            ]
        },
        "empire": {
            "male": [
                "你好，先生",
		"我是布鲁诺，当地的裁缝，如果你觉得需要新衣服，我就在这里，很高兴为你服务。",
            ],
            "female": [
                "亲，来看看吧！",
		"看到美女，总是令人愉悦的，我是布鲁诺，如果你需要最好的衣服，你会得到一个适中的价格。"
            ]
        },
        "confederation": {
            "male": [
                "嘿！小子！",
		"看你穿得跟小丑似的，我叫布鲁诺，进来，我会带给你整个rogalia最好的衣服！",
            ],
            "female": [
                "嗨！小妞！",
		"事实上，你是一个混蛋，没有改变。你需要好的衣服，我是布鲁诺，活着的最好的裁缝！",
            ]
        },
        "actions": {
            "Trade": "我想看你的货物。",
        },
    },
    "ahper": {
        "default": {
            "male": [
                "我可以在一瞬间打破一块巨石......呃，原谅我",
            ]
        },
        "actions": {
            "Trade": "我想看看你的货物。",
        },
    },
    "cosmas": {
        "default": {
            "male": [
                "嗨，这是我的史密斯，你需要一个装备，还有一个装甲，可能呢？唉...每个人都喜欢武器。",
            ]
        },
        "actions": {
            "Trade": "我想看看你的货物。",
        },
    },
    "boris": {
        "default": {
            "male": [
                "进来，孩子，我们的教会总是迎接新的教区居民。",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ],
            "female": [
                "进来，孩子，我们的教会总是迎接新的教区居民。",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ]
        },
        "empire": {
            "male": [
                "进来，孩子，我们的教会总是迎接新的教区居民。",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ],
            "female": [
                "进来，孩子，我们的教会总是迎接新的教区居民。",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ]
        },
        "confederation": {
            "male": [
                "进来，孩子，我们的教会总是迎接新的教区居民。",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ],
            "female": [
                "进来，孩子，我们的教会总是迎接新的教区居民。.",
		"我的名字是鲍里斯，我是这个修道院的主教，在这里，我把主的光辉带给所有需要的人。我想你是到这里来忏悔的（消罪恶度）。",
            ]
        },
        "actions": {
            "Trade": "我想获得（买）救赎。",
        }
    },
    "bertran": {
        "default": {
            "male": [
                "肉，肉，肉……",
                "别走开, 神秘的先生, 来见见伯特伦. 我是这里的屠夫，屠宰是我的专长. 我能切碎你（拥有的）的（动物）尸体, 不是你的尸体, 别害怕. 我已经不切活物好多年. 也许你可以考虑从我这里买些新鲜的肉回去",
            ],
            "female": [
                "多多多么美美味的肉...",
                "我是想说, 我这里有那么美味的鱼片。我爱鱼片，切鱼片真是太太太美妙了... 抱歉, 女士. 我想我快疯掉了. 我是这里的屠夫伯特伦. 你可以在我这里买到新鲜的肉, 我还能教你烹饪, 或者别的... 别介意, 我知道那样无法满足你.",
            ]
        },
        "actions": {
            "Trade": "我想看看你的货物。",
        }

    },
    "vendor": {
        "default": {
            "male": [
                "欢迎光临敝店, 先生。",
            ],
            "female": [
                "欢迎光临敝店, 女士。",
            ],
        },
        "actions": {
            "Trade": "我想看看你的货物。",
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "新年快乐！",
                "行动起来，马上给你的屋子换换风格吧！",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "你好！",
                "节日到了! 让我们一起装点圣诞树并互赠礼物吧!"
            ],
        },
    },
    "ivan": {
        "default": {
            "male": [
                "嘿! 靠近些, 别害臊!",
                "我是这里的樵夫伊凡. 你正在为伐木却找不到一把锯子、一柄斧头或其他什么工具而发愁吗? 找我就对了, 让你看看我的大宝贝!",
            ],
        },
    },
    "plato": {
        "default": {
            "male": [
                "你好, 我的朋友.",
                "我叫柏拉图, 我在这里是要教会菜鸟们如何生存。无论你是自愿来此亦或是被帝国流放至此。多听多学少说话, 如果你还不想成为外面那些野兽的晚餐的话。",
            ],
        },
    },
    "athena": {
        "default": {
            "male": [
                "啊哈! 这里是血肉竞技场!",
		"我叫雅典娜，是这里的管理员。无论男女老幼，我只在乎你眼中嗜血和渴望!与其他竞技者在这裡厮杀，展现你的战斗技艺吧！"
            ]
        },
    },
    "alfred": {
        "default": {
            "male": [
                "欢迎你的到来, 旅行者。",
                "我是这里的管家阿尔佛雷德，这里有温暖舒适的床，你可以在这里找到家一般的感觉，虽然不那么富丽堂皇，但能让你好好休息。",
            ],
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "嗨，我是——圣诞老人，听说过吗？",
                "我以防万一问一句啊，人有时很奇怪的，雪没有看到有人，有人不相信魔术…我的房子，在冬天的岛上，试图做好准备，你都是奇怪的，但这样的我没想到的是，告诉你…好吧好吧，继续吧。",
                "新的一年即将到来！而在新的一年里，所有的梦想都将成真！你，顺便说一下，你是男孩子还是女孩子？想要的礼物吗？在新的一年…等待！",
                "嗬嗬嗬！嗯，好的，好的，我能早点给你你要的东西，但首先我需要你做件差事，可以吗？",
                "顺便问一下，我的孙女，雪之少女，也有一些跑腿的差事，给你。",
                "说真的，她是个好女孩，不过有些古怪。可怜的孩子……",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "这是谁来了？大声的来了，唱歌吗？",
                "谁在跑一窝子和尖叫？争先恐后地。",
                "一百怪物，201个赤裸羔羊法师？",
                "姐这里有别的地方没有的好东西哦！",
                "来吧，不要怕，小男孩，今天姐姐我很高兴",
                "从瓦尔哈拉给您带来的卷轴",
                "不同的药水以及优秀的剑和棍棒。",
                "生日蛋糕",
                "人偶娃娃",
                "这里只有一个问题。",
                "我找不到一个替代品。",
                "我需要一个男人，而是勇敢的",
                "涉水进入黑森林",
                "他会驾着祥云回来",
                "你认识他们吗？",
                "他们都在这里埋着呢！",
                "人类死亡得太快……",
                "这片土地，有边界吗？",
                "不帮我们，那你来这干嘛？",
                "不要离开，永远。",
                "新年好！",
                "就这样，都会过去的！",
                "嗯，你说什么。",
                "不要沉默，不要冷颤。",
                "姐，冰雪聪明。",
                "姐是冰冻美人。",
            ].join("<br>"),
            "female": [
                "谁在这里行走，使整个大地在摇晃？",
                "减肥后就不会留下痕迹在这里!",
                "来吧，别担心，宝贝，我不会杀你。",
                "雪之少女今天会把所有的馅饼拿出来。",
                "巧克力，蛋糕，草。",
                "我刚刚吃饱",
                "够简单",
                "忘掉生活的不幸，不是很好吗？",
                "这就是我所说的",
                "帮帮我！",
                "姐很不容易的。",
                "你说得对。",
                "你需要有用的东西吗？",
                "不帮我们，那你来干嘛？",
                "不要离开，永远。",
                "新年好！",
                "就这样，都会过去的！",
                "嗯，你说什么。",
                "不要沉默，不要冷颤。",
                "姐，冰雪聪明。",
                "姐是冰冻美人。",
            ].join("<br>"),
        },
    },
    "angelina": {
        "default": {
            "male": [
                "(*@ο@*) 哇～!",
                "不害怕喵? 你好无趣耶...伦家叫安吉拉啦，是一个幽灵哦. 而且嚯，伦家可是很会讲鬼故事的哟。坐下坐下啦, 听我给你讲一段了啦。",
            ],
        },
    },
};