import { Directive, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Directive()
export abstract class FilterContainerClass implements OnInit {

  filterData = {} as any;
  filterForm: FormGroup;

  constructor (
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder
  ) {

    this.filterForm = _formBuilder.group({
      beginDate: [null],
      endDate: [null]
    });

    this.filterForm.valueChanges
      .subscribe((value) => {
        this.updateQueryParams(value);
      });

  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .subscribe((params: Params) => {
        console.log(params);
        this.filterData = params !== undefined ? params : this.filterData;
        this.filterForm.patchValue(this.filterData);
      });
  }


  protected updateQueryParams(params: Params): void {
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: params, queryParamsHandling: 'merge' });
  }

}