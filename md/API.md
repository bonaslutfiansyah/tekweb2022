# API POINTS



## ARTICLE

### Menampilkan article user
```
GET: /article
response:
[
  {
    "id"              : "",
    "title"           : "",
    "author"          : "",
    "thumbnail"       : "",
    "content"         : "",
    "markdown"        : ""
  },
  {
    ...
  }
]
```
### Menampilkan article user berdasarkan ```id```
```
GET: /article/[id]
response:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "thumbnail"       : "",
  "content"         : "",
  "markdown"        : "",
}
```
### Menambahkan article user
```
POST: /article
data:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "thumbnail"       : "",
  "content"         : "",
  "markdown"        : "",
}
response:
true    //if true
false   //if false
```
### Mengubah article user
```
PUT: /article
data:
{
  "id"              : "",
  "title"           : "",
  "author"          : "",
  "thumbnail"       : "",
  "content"         : "",
  "markdown"        : "",
}
response:
true    //if true
false   //if false
```
### Menghapus article user
```
DELETE: /article/[id]
response:
true    //if true
false   //if false
```
## ABOUT
### Menampilkan seluruh about
```
GET: /about
response:
[
  {
    "id"        : "",
    "des"       : "",
    "sapa"      : "",
    "foto"      : ""
  },
  {
    ...
  }
]
```
### Menampilkan about berdasarkan ```id```
```
GET: /about/[id]
response:
{
  "id"              : "",
  "des"             : "",
  "sapa"            : "",
  "foto"            : ""
}
```
### Menambahkan about
```
POST: /about
data:
{
  "id"              : "",
  "des"             : "",
  "sapa"            : "",
  "foto"            : ""
}
response:
true    //if true
false   //if false
```
### Mengubah about
```
PUT: /about
data:
{
  "id"              : "",
  "des"             : "",
  "sapa"            : "",
  "foto"            : ""
}
response:
true    //if true
false   //if false
```
### Menghapus about
```
DELETE: /about
response:
true    //if true
false   //if false
```

# DATABASE DESIGN
![Design Database](https://raw.githubusercontent.com/bonaslutfiansyah/tekweb2022/main/md/API%20Design.png)
