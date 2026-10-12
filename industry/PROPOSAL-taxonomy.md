# 分类、标签和主题：待站长确认的建议稿

AGENTS.md 规定“分类怎么分”要由站长本人决定，所以这次改动**没有改** `industry/taxonomy.ts`、`industry/topics.json` 和 `industry/prompts/structure.md`，它们仍是 AI 示例站的内容。确认下面的建议（或改成你自己的）以后，再一起改这三个文件和 `tests/` 里用到示例分类的测试（见 docs/customize.md 第 2 节）。

## 建议的类别（CATEGORIES，key 上线后不能改）

| key | label | 收什么 |
|---|---|---|
| `livelihood` | 民生 | 就业断层、裁员降薪欠薪、消费降级、资产缩水、房贷债务、教育育儿负担 |
| `institution` | 制度成本 | 社保医保养老公积金、税费、户籍等制度性成本与规则变化 |
| `controversy` | 舆论争议 | 删帖控评、起诉测评者、品牌与官方媒体互动、平台限流等标志性争议 |
| `enforcement` | 基层执法 | 政策在基层执行、执法冲突、罚款、拆迁、维权、信访 |
| `opinion` | 观点（commentary） | 评论、个人自述、访谈、海外视角分析 |

`RELEASE` 建议设为 `null`（这个领域没有“新模型”这样的发布类）。

## 建议的分类标签（CATEGORY_TAGS）

就业/收入、消费、资产/房产、社保/医保、教育/育儿、舆论/删帖、执法/基层治理、政策/监管、个体叙述、数据/调查、其他

## 建议的主题标签（TOPIC_TAGS）

裁员、欠薪、灵活就业、青年失业、房贷断供、降薪、涨价、退费、断缴、养老金、城管、罚款、拆迁、维权、限流、海外视角

## 建议的实体（ENTITIES / ENTITY_TAGS）

平台：微博、哔哩哔哩、抖音、微信视频号；常被讨论的企业（例如华为）和官方媒体（人民日报、新华社、央视）。是否把具体企业列为“公司主题”由你决定。

## 建议的主题目录（topics.json）

分组 `company` 可改为“平台与机构”，`field` 改为“民生议题”（就业、消费、资产、社保、执法、舆论），`genre` 保持“内容形态”（调查、自述、观点、政策解读）。

## 内容类型（ITEM_TYPES）

框架代码（`packages/backend/src/editorial/`）用到这 7 个键名，所以保持不变；`prompts/selection-score.md` 和 `prompts/content-understanding.md` 已经按本站重新定义了每个键的含义。注意 `content-understanding.md` 里“itemType 与第一个分类标签自洽”那段还对应着旧的 AI 分类标签，改分类时一起改。
