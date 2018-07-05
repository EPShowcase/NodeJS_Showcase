'use strict';

module.exports = function(model) {
  model.disableRemoteMethodByName('create');		// Removes (POST) /model
  model.disableRemoteMethodByName('upsert');		// Removes (PUT) /model
  model.disableRemoteMethodByName('replaceOrCreate'); // Removes PUT /model
  model.disableRemoteMethodByName('replaceById'); // Removes PUT /model/{id}
  model.disableRemoteMethodByName('upsertWithWhere'); // Removes POST /model/upsertWithWhere
  model.disableRemoteMethodByName('deleteById');	// Removes (DELETE) /model/:id
  model.disableRemoteMethodByName('updateAll');		// Removes (POST) /model/update
  model.disableRemoteMethodByName('prototype.updateAttributes'); // Removes (PUT) /model/:id
  model.disableRemoteMethodByName('prototype.patchAttributes');  // Removes (PATCH) /model/:id
  model.disableRemoteMethodByName('createChangeStream'); // Removes (GET|POST) /model/change-stream
};
