export function AutoUnsubscribe(blackList = []) {
    blackList = [...blackList, 'store'];
    return function (constructor) {
      const original = constructor.prototype.ngOnDestroy;
      constructor.prototype.ngOnDestroy = function() {
        for (const prop in this) {
          if (!this.hasOwnProperty(prop)) {
            continue;
          }
          const property = this[prop];
          if (!blackList.includes(prop)) {
            if (property && (typeof property.unsubscribe === 'function')) {
              property.unsubscribe();
            }
          }
        }
        if (original && typeof original === 'function') {
          original.apply(this, arguments);
        }
      };
    };
  }
