

    // values submitted
app.get('/valuessubmitted', (req, res) => {
    state={valuessubmited : true}
    console.table(req.query);
    //console.log(json.stringify(req.query));
    head={title:"form values"} ;
    res.render('valuessubmitted', { state, head, data: req.query });
    console.log('valuessubmitted')
  });

